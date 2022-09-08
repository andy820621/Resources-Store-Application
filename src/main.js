import { createApp } from "vue";
import App from "./App.vue";

import BaseCard from "@/components/UI/BaseCard.vue";
import BaseButton from "@/components/UI/BaseButton.vue";
import BaseDialog from "@/components/UI/BaseDialog.vue";
import BaseLoading from "@/components/UI/BaseLoading.vue";

const app = createApp(App);

app.component("BaseCard", BaseCard);
app.component("BaseButton", BaseButton);
app.component("BaseDialog", BaseDialog);
app.component("BaseLoading", BaseLoading);

app.mount("#app");
