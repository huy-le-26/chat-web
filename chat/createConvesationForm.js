import { inputCommon } from "../common/inputCommon.js";
import { Modal } from "../common/modal.js";

class CreateConversationForm {
    container = document.createElement('div');

    modal = new Modal();

    form = document.createElement('form');
    // First: current user
    conversationNameInput = new inputCommon(
        "Conversation Name",
        "tên cuộc trò chuyện ",
        "Enter your conversation name",
        "conversationName"
    );

    constructor() {
        this.container.appendChild(this.modal.container);
        this.container.classList.add("square");

        this.container.style.visibility = "hidden";
        // trạng thái bình thường thì nút này sẽ ẩn hết các cuộc trò chuyện
        this.container.classList.add("hiddenForm");
/// set header cho cuộc trò chuyện
        this.modal.setHeader("Create conversation");
        this.modal.setBody(this.form);
///hàm ấn vào nút cancel của modal
        this.modal.setOnclickCancel(() => {
            this.setVisible(false);
        });
//// khi ấn vào nút createConversation thì sẽ hiện lên cuộc trò chuyện
        this.modal.setOnclickCreate(this.handleCreateConversation);

        this.conversationNameInput.container.classList.add("conversationNameInput");

        this.form.appendChild(this.conversationNameInput.container);
    }
/// hàm add dữ liểu vào firebase
    handleCreateConversation = () => {
        console.log(firebase.auth())
        const name = this.conversationNameInput.getValue();
        db.collection("conversations").add({
            name: name,
            users: [firebase.auth().currentUser.email],
        

        });
    };
// hàm ẩn hiện khi kích vào
    setVisible = (visible) => {
        if (visible) this.container.style.visibility = "visible";
        else this.container.style.visibility = "hidden";
    };
}

export { CreateConversationForm };