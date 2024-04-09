import { createApp } from "vue";
import "@/index.css";
import App from "./App.vue";
import router from "./router";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const app = createApp(App);

app.use(router);

app.component("Button", Button);
app.component("Label", Label);
app.component("Input", Input);
app.component("FormControl", FormControl);
app.component("FormDescription", FormDescription);
app.component("FormField", FormField);
app.component("FormItem", FormItem);
app.component("FormLabel", FormLabel);
app.component("FormMessage", FormMessage);
app.component("Card", Card);
app.component("CardContent", CardContent);
app.component("CardDescription", CardDescription);
app.component("CardFooter", CardFooter);
app.component("CardHeader", CardHeader);
app.component("CardTitle", CardTitle);

app.mount("#app");
