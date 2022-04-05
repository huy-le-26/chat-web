import { ConversationItem } from './conversationItem.js';
import { CreateConversationForm } from "./createConvesationForm.js";

class ConversationList {
  container = document.createElement('div');
 
  btnCreateConversation = document.createElement('button');
  creatConversationForm = new CreateConversationForm();

  onConversationItemClick;
  conversations = [];

  constructor() {
    // đặt tên nút là + Create Conversation
    this.container.classList.add("ConversationList")
    this.btnCreateConversation.innerHTML = "+";
    this.container.classList.add("btnCreateConversation");

    this.btnCreateConversation.addEventListener("click", this.handleVisible);
    this.container.appendChild(this.btnCreateConversation);
    this.container.appendChild(this.creatConversationForm.container);

  };

  setOnConversationItemClick = (listener) => {
    this.onConversationItemClick = listener;
  }

  handleCreateConversationAdded = (id, name, users) => {
    const conversation = new ConversationItem(id, name, users);

    conversation.setOnClick((id, name, users) => {

      // Get conversation information
      //console.log(id, name, users);

      this.onConversationItemClick({
        id: id,
        name: name,
        users: users,
      });

    });

    this.conversations.push(conversation);
    this.container.appendChild(conversation.container);
  }

  setStyleActiveConversation = (conversation) => {
    this.conversations.forEach((item) => {
      if (item.id === conversation.id) {
        item.setActiveHighlight(true);
      } else {
        item.setActiveHighlight(false);
      }
    });
  };

  removedItem = (id) => {
    // Update array
    const index = this.conversations.findIndex((item) => item.id === id);
    const conversation = this.conversations.find((item) => item.id === id);
    this.conversations.splice(index, 1);

    // Update UI
    conversation.container.remove();
  };

  handleVisible = () => {
    this.creatConversationForm.setVisible(true);
  };

  handleConversationUpdate = (id, name, users) => {
    this.conversations.forEach((conversation) => {
      if (conversation.id === id) {
        conversation.setUsers(users);
      }
    });
  };

}

export { ConversationList };