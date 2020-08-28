export default {
  state: {
    data: [
      {
        route: "/staffManage",
        name: "员工管理",
        children: [
          { route: "user1", name: "员工1" },
          { route: "user2", name: "员工2" },
          {
            route: "user3",
            name: "员工3",
            children: [
              { route: "user3-1", name: "员工3-11111111111111111111111111" },
              { route: "user3-2", name: "员工3-2" },
              { route: "user-33", name: "员工3-3" }
            ]
          }
        ]
      },
      {
        route: "/deptManage",
        name: "部门管理",
        children: [
          { route: "dept1", name: "部门1" },
          { route: "dept2", name: "部门2" },
          { route: "dept3", name: "部门3" }
        ]
      },
      { route: "/system3", name: "接口管理" },
      { route: "/system4", name: "菜单管理" },
      { route: "/system5", name: "商品管理" },
      { route: "/system6", name: "学员管理" },
      { route: "/system7", name: "教师管理" },
      { route: "/system8", name: "数据管理" }
    ]
  }
};
