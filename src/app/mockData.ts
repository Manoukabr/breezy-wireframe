export const mockPosts = [
  { id: "1", user: "Alice", handle: "@alice", content: "Just setting up my Breezy account. This is a low-fidelity wireframe but it feels real!", likes: 12, comments: 3, time: "2h", liked: false },
  { id: "2", user: "Bob", handle: "@bob", content: "Working on some new mobile-first designs today. Grayscale is actually quite refreshing to look at.", likes: 45, comments: 8, time: "4h", liked: true },
  { id: "3", user: "Charlie", handle: "@charlie", content: "Anyone else prefer wireframes over high-fidelity mockups for initial feedback? Much less distraction.", likes: 89, comments: 12, time: "5h", liked: false },
  { id: "4", user: "Diana", handle: "@diana", content: "Hello world! First post on Breezy.", likes: 5, comments: 0, time: "1d", liked: false }
];

export const mockComments = [
  { id: "101", user: "Dave", handle: "@dave", content: "Totally agree! It helps focus on the flow.", time: "1h" },
  { id: "102", user: "Eve", handle: "@eve", content: "Can't wait to see the final version with colors.", time: "30m" }
];

export const mockUserProfiles = [
  { id: "u1", name: "Alice", handle: "@alice", bio: "UX Designer and front-end developer.", following_count: 124, followers_count: 4092, following: false },
  { id: "u2", name: "Bob", handle: "@bob", bio: "Mobile-first designer. Grayscale lover.", following_count: 80, followers_count: 1200, following: true },
  { id: "u3", name: "Charlie", handle: "@charlie", bio: "Wireframe enthusiast.", following_count: 60, followers_count: 980, following: false },
  { id: "u4", name: "Diana", handle: "@diana", bio: "Hello world!", following_count: 10, followers_count: 50, following: false },
];

export const mockUsers = [
  { id: "u1", name: "Frank", handle: "@frank", following: true },
  { id: "u2", name: "Grace", handle: "@grace", following: false },
  { id: "u3", name: "Heidi", handle: "@heidi", following: true },
  { id: "u4", name: "Ivan", handle: "@ivan", following: false },
];

export const mockNotifications = [
  { id: "n1", type: "like", user: "Frank", handle: "@frank", content: "liked your post", time: "2h", read: false },
  { id: "n2", type: "mention", user: "Grace", handle: "@grace", content: "mentioned you in a post", time: "4h", read: true },
  { id: "n3", type: "follow", user: "Heidi", handle: "@heidi", content: "followed you", time: "1d", read: true },
];

export const mockChats = [
  { id: "c1", user: "Bob", handle: "@bob", lastMessage: "Are we still on for the design review?", time: "2m", unread: 2 },
  { id: "c2", user: "Diana", handle: "@diana", lastMessage: "Thanks for the feedback!", time: "1h", unread: 0 },
  { id: "c3", user: "Charlie", handle: "@charlie", lastMessage: "Send me the link when it's ready.", time: "1d", unread: 0 },
];

export const mockMessages = [
  { id: "m1", sender: "Bob", text: "Hey! How is the new wireframe coming along?", time: "10:00 AM", isMe: false },
  { id: "m2", sender: "Me", text: "It's going well. Just finishing up the messaging screens.", time: "10:05 AM", isMe: true },
  { id: "m3", sender: "Bob", text: "Are we still on for the design review?", time: "10:06 AM", isMe: false },
];
