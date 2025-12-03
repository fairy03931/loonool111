// 假数据：模拟从后端拿到的空间列表
const spaces = [
  {
    id: "SP-001",
    name: "亚马逊主图审核 · 11月活动",
    owner: "Jinxi",
    taskCount: 5,
    lastUpdated: "2025-11-30 18:23",
    status: "active",
  },
  {
    id: "SP-002",
    name: "新品包装图审核 · 新年主题",
    owner: "Design Team",
    taskCount: 3,
    lastUpdated: "2025-11-28 14:05",
    status: "active",
  },
  {
    id: "SP-003",
    name: "历史活动 · 已归档示例",
    owner: "Marketing",
    taskCount: 8,
    lastUpdated: "2025-10-10 09:12",
    status: "archived",
  },
];

// 状态文字
function statusLabel(status) {
  if (status === "active") return "活跃";
  return "已归档";
}

// 渲染表格
function renderSpaces() {
  const tbody = document.getElementById("spaces-tbody");
  const tableWrapper = document.getElementById("spaces-table-wrapper");
  const emptyState = document.getElementById("empty-state");

  if (!tbody || !tableWrapper || !emptyState) return;

  if (!spaces.length) {
    tableWrapper.style.display = "none";
    emptyState.style.display = "block";
    return;
  }

  tableWrapper.style.display = "block";
  emptyState.style.display = "none";

  tbody.innerHTML = "";

  spaces.forEach((space) => {
    const tr = document.createElement("tr");

    tr.innerHTML = `
      <td class="space-name">
        <span class="space-name-main">${space.name}</span>
        <span class="space-name-sub">Space ID：${space.id}</span>
      </td>
      <td>${space.owner}</td>
      <td>${space.taskCount}</td>
      <td>${space.lastUpdated}</td>
      <td>
        <span class="status-pill status-${space.status}">
          ${statusLabel(space.status)}
        </span>
      </td>
      <td class="actions-cell">
        <button class="btn-outline" onclick="enterSpace('${space.id}')">
          进入空间
        </button>
      </td>
    `;

    tbody.appendChild(tr);
  });
}

// 点击“进入空间”
function enterSpace(spaceId) {
  const space = spaces.find((s) => s.id === spaceId);
  console.log("进入空间：", spaceId, space);

  // 这里可以改成真正的跳转：
  // window.location.href = `/review-space.html?id=${encodeURIComponent(spaceId)}`;
  alert(`准备进入空间：${space ? space.name : spaceId}`);
}

// 点击“创建新的审核空间”
function createSpace() {
  console.log("创建新的审核空间");
  alert("这里可以弹出创建 Space 的流程（后端对接后再实现）");

  // 示例：跳转到创建页面：
  // window.location.href = "/create-space.html";
}

// 页面加载完成后渲染
document.addEventListener("DOMContentLoaded", () => {
  renderSpaces();
});
