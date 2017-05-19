/**
 * Created by Jonas on 19.05.17. (c) 2017
 */

const CONTINUE = false, STOP = true;

function noop () {
  return (arguments.length === 1 ? [arguments[0]] : Array.apply(null, arguments));
}

function Injector () {
  this.registeredDependencies = {};
}

Injector.prototype.register = function (name, dependency) {
  this.registeredDependencies[name] = dependency;
};

Injector.prototype.inject = function (depsArray, injectTo = noop) {
  if (!Array.isArray(depsArray)) {
    if (typeof depsArray === "function") {
      return depsArray();
    } else {
      throw new Error("parameter must be an array or function");
    }
  }
  let dependencies = [], error = null;
  if (depsArray.some((element, index) => {
      if (typeof element !== "string") {
        if (index === depsArray.length - 1 && typeof element === "function") {
          element(...dependencies);
          return STOP;
        }
        error = new Error("Only the last element in the array can be");
        return STOP;
      }
      if (element in this.registeredDependencies) {
        dependencies.push(this.registeredDependencies[element]);
        return CONTINUE;
      } else {
        error = new Error(`Module ${element} is not registered`);
        return STOP;
      }
    })) {
    if (error) {
      throw error;
    }
  }
  return injectTo(...dependencies);
};

module.exports = new Injector();
