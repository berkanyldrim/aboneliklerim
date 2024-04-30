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

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuCheckboxItem,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuGroup
} from '@/components/ui/dropdown-menu'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'

import { Separator } from '@/components/ui/separator'

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'


const app = createApp(App);

app.use(router);

app.component("Avatar", Avatar);
app.component("AvatarFallback", AvatarFallback);
app.component("AvatarImage", AvatarImage);
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
app.component("Tabs", Tabs);
app.component("TabsContent", TabsContent);
app.component("TabsList", TabsList);
app.component("TabsTrigger", TabsTrigger);
app.component("DropdownMenu", DropdownMenu);
app.component("DropdownMenuContent", DropdownMenuContent);
app.component("DropdownMenuCheckboxItem", DropdownMenuCheckboxItem);
app.component("DropdownMenuItem", DropdownMenuItem);
app.component("DropdownMenuLabel", DropdownMenuLabel);
app.component("DropdownMenuSeparator", DropdownMenuSeparator);
app.component("DropdownMenuTrigger", DropdownMenuTrigger);
app.component("DropdownMenuGroup", DropdownMenuGroup);
app.component("Dialog", Dialog);
app.component("DialogContent", DialogContent);
app.component("DialogDescription", DialogDescription);
app.component("DialogFooter", DialogFooter);
app.component("DialogHeader", DialogHeader);
app.component("DialogTitle", DialogTitle);
app.component("DialogTrigger", DialogTrigger);
app.component("Separator", Separator);
app.component("Select", Select);
app.component("SelectContent", SelectContent);
app.component("SelectGroup", SelectGroup);
app.component("SelectItem", SelectItem);
app.component("SelectLabel", SelectLabel);
app.component("SelectTrigger", SelectTrigger);
app.component("SelectValue", SelectValue);


app.mount("#app");
