export const isLink = function (props, propName, componentName) {
    const regex =
      /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;
  
    if (!regex.test(props[propName])) {
      return new Error(
        `Invalid prop ${propName} passed to ${componentName}. Expected a link.`
      );
    }
  };