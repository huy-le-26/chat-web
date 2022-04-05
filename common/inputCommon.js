class inputCommon {
    container = document.createElement('div');
    //label = document.createElement('label');
    input = document.createElement('input');
    errMessage = document.createElement('div');

    constructor(inputType, placeholder, name) {
        //this.label.innerHTML = label;
        this.input.type = inputType;
        this.input.placeholder = placeholder;
        this.input.name = name;
        //this.input.value = value;
        //this.label.htmlFor = name;

        //this.container.appendChild(this.label);
        this.container.appendChild(this.input);
        this.container.appendChild(this.errMessage);
    }

    getValue = () => {
        return this.input.value;
    }

    setErrMessage = (errMessage) => {
        this.errMessage.innerHTML = errMessage;
    }
}

export { inputCommon }