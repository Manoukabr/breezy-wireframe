import { createBrowserRouter } from "react-router";
import { AppLayout, MainNavLayout } from "./components/Layouts";
import { LoginScreen } from "./screens/LoginScreen";
import { SignUpScreen } from "./screens/SignUpScreen";
import { HomeFeedScreen } from "./screens/HomeFeedScreen";
import { ComposeScreen } from "./screens/ComposeScreen";
import { PostDetailsScreen } from "./screens/PostDetailsScreen";
import { UserProfileScreen } from "./screens/UserProfileScreen";
import { NetworkScreen } from "./screens/NetworkScreen";
import { NotificationsScreen } from "./screens/NotificationsScreen";
import { MessagesScreen } from "./screens/MessagesScreen";
import { ChatScreen } from "./screens/ChatScreen";
import { SettingsScreen } from "./screens/SettingsScreen";
import { PublicProfileScreen } from "./screens/PublicProfileScreen";
import { AdminDashboardScreen } from "./screens/AdminDashboardScreen";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: AppLayout,
    children: [
      { index: true, Component: LoginScreen },
      { path: "signup", Component: SignUpScreen },
      {
        path: "app",
        Component: MainNavLayout,
        children: [
          { path: "home", Component: HomeFeedScreen },
          { path: "profile", Component: UserProfileScreen },
          { path: "notifications", Component: NotificationsScreen },
          { path: "messages", Component: MessagesScreen },
        ]
      },
      { path: "app/compose", Component: ComposeScreen },
      { path: "app/post/:id", Component: PostDetailsScreen },
      { path: "app/profile/network", Component: NetworkScreen },
      { path: "app/messages/:id", Component: ChatScreen },
      { path: "app/settings", Component: SettingsScreen },
      { path: "app/user/:handle", Component: PublicProfileScreen },
      { path: "app/admin", Component: AdminDashboardScreen },
    ],
  },
]);
