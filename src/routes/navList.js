const navList = [
  {
    url: "/db",
    name: "Dashboard",
    iconClass: "material-icons",
    iconFont: "dashboard",
    child: [
      {
        url: "/first",
        name: "First"
      },
      {
        url: "/second",
        name: "Second child"
      }
    ]
  },
  {
    url: "/person",
    name: "Person",
    iconClass: "material-icons",
    iconFont: "person"
  }
];

export default navList;
