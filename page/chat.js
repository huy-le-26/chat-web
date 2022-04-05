import { ConversationInfo } from "../chat/conversationInfor.js";
import { ConversationList } from '../chat/conversationList.js';
import { Composer } from "../chat/composer.js";
import { MessageList } from "../chat/messageList.js";
import { UserList } from "../chat/userList.js";

class Chat {

    activeConversation;
    subcribeConversationMessages = null;

    container = document.createElement('div');
    btnLogOut = document.createElement("button");

    conversationList = new ConversationList();
    conversationInfor = new ConversationInfo();

    composer = new Composer();
    messageList = new MessageList();
    userList = new UserList();
    constructor() {
        this.container.appendChild(this.conversationList.container);
        this.container.classList.add("container");
        this.conversationList.setOnConversationItemClick(
            this.setActiveConversation
        );
        this.conversationList.container.classList.add("left-content");

        const divContent = document.createElement("div");
        divContent.classList.add("right-content");

        this.container.appendChild(divContent);
        divContent.appendChild(this.conversationInfor.container);

        const divMainContent = document.createElement("div")
        divContent.appendChild(divMainContent);
        divMainContent.classList.add("right__main-content")

        const divMessages = document.createElement("div");
        divMessages.classList.add("chat-container")
        divMainContent.appendChild(divMessages)
        divMessages.appendChild(this.messageList.container);
        divMessages.appendChild(this.composer.container);

        divMainContent.appendChild(this.userList.container);
        this.subcribeConversation();

    };

    setActiveConversation = (conversation) => {
        this.activeConversation = conversation;

        this.conversationInfor.setName(conversation.name);
        this.conversationList.setStyleActiveConversation(conversation);

        this.composer.setActiveConversation(conversation);
       

        this.userList.setActiveConversation(conversation);

        this.messageList.clearMessage();

        this.subcribeConversationMessageList();
    }
     
    subcribeConversation = () => {
        db.collection("conversations")
      
        .where("users", "array-contains", firebase.auth().currentUser.email)
            .onSnapshot((snapshot) => {
                snapshot.docChanges().forEach((change) => {
                    if (change.type === "added") {
                        console.log("New conversation: ");

                        this.conversationList.handleCreateConversationAdded(
                            change.doc.id,
                            change.doc.data().name,
                            change.doc.data().users
                        )
                    }
                    if (change.type === "modified") {
                        console.log("Modified conversation: ");
                        this.userList.setActiveConversation({
                            id: change.doc.id,
                            name: change.doc.data().name,
                            users: change.doc.data().users,
                        });
                    }
                    if (change.type === "removed") {
                        console.log("Removed conversation: ");
                        this.conversationList.removedItem(change.doc.id);
                    }
                });
            });
    };

    subcribeConversationMessageList = () => {
        if (this.subcribeConversationMessages !== null) {
            this.subcribeConversationMessages();
        }

        // Connect to listen
        this.subcribeConversationMessages = db
            .collection("messages")
            .where("conversationId", "==", this.activeConversation.id)
            .onSnapshot((snapshot) => {
                snapshot.docChanges().forEach((change) => {
                    this.messageList.addMessage(change.doc.data());
                });
            });
        // => Function()
    };
}

export { Chat };