class Modal {
    container = document.createElement('div');
    modalContainer = document.createElement('div');

    header = document.createElement('div');
    body = document.createElement('div');
    footer = document.createElement('div');
   btnContainer =document.createElement('div')
    btnCreate = document.createElement('button');
    btnCancle = document.createElement('button');

    constructor() {
        this.container.appendChild(this.modalContainer);

        this.header.classList.add('title');

        this.modalContainer.appendChild(this.header);
        this.modalContainer.appendChild(this.body);
        this.modalContainer.appendChild(this.footer);
        this.modalContainer.appendChild(this.btnContainer);
        this.btnContainer.appendChild(this.btnCreate)
        this.btnContainer.appendChild(this.btnCancle)
        this.btnContainer.classList.add("btn")
     
        this.btnCreate.innerHTML = "Create";
        this.btnCancle.innerHTML = "Cancle";
       

        // this.modalContainer.appendChild(this.btnCancle);
        // this.modalContainer.appendChild(this.btnCreate);
        
    }

    setHeader = (title) => {
        this.header.innerHTML = title;
    };

    setBody = (component) => {
        this.body.innerHTML = "";
        this.body.appendChild(component);
    };

    setOnclickCancel = (listener) => {
        this.btnCancle.onclick = listener;
    };

    setOnclickCreate = (listener) => {
        this.btnCreate.onclick = listener;
    };
}

export { Modal };