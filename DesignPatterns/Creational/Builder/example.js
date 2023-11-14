class CodeBuilder {
    constructor(className) {
        this.className = className;
        this.attributes = {};
    }

    addField(attribute) {
        this.attributes[attribute] = attribute;
        return this;
    }

    toString() {
        const constructorParams = Object.keys(this.attributes);

        let strClass = `class ${this.className} {\n`;
        let strConstructorParams = "";
        let strConstructorContent = "";

        if (constructorParams.length !== 0) {
            strConstructorParams = `  constructor(${constructorParams.join(
                ", "
            )}) {\n`;
            for (let key in this.attributes) {
                strConstructorContent += `    this.${key} = ${key};\n`;
            }
            strConstructorContent += "  }\n";
        }

        return strClass + strConstructorParams + strConstructorContent + "}";
    }
}

let cb = new CodeBuilder('Person');
cb.addField('name').addField('age');
console.log(cb.toString());