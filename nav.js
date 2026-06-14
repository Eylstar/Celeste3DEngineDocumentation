
const SITE = {
    name:    "Celeste",
    nameAccent: "3D",
    name2: "Engine",
    version: "v0.4.0",
    base: ""
}

const NAV = [
    {
        section: "Getting Started",
        items: [
            { label: "What is Celeste3DEngine",   href: "introduction.html" },
            { label: "Installation and folders",   href: "installation.html" },
            { label: "Loading the Engine", href: "premier-projet.html" },
            { label: "Scene Creation and Rendering", href: "premier-projet.html" },
            { label: "Adding Custom Logic", href: "premier-projet.html" },
            { label: "(Advanced) Engine Persistence", href: "premier-projet.html" },
        ]
    },
    {
        section: "ENGINE",
        items: [
            { label: "EngineEntity", href: "engine/EngineEntity.html" },
            { label: "Scene3D",     href: "scene.html" },
            { label: "EnginePaths",    href: "camera.html" },
            { label: "EngineCallbacks",    href: "camera.html" },
        ]
    },
    {
        section: "GAMEOBJECT COMPONENTS",
        items: [
            { label: "GameObject",   href: "renderer.html" },
            { label: "Transform",    href: "shaders.html" },
            { label: "MeshRenderer",  href: "materiaux.html" },
            { label: "Material",   href: "lumieres.html" },
            { label: "Behaviour",   href: "lumieres.html" },
            { label: "AnimationPlayer",   href: "lumieres.html" },
            { label: "AudioSource",   href: "lumieres.html" },
        ]
    },
    {
        section: "RENDERING",
        items: [
            { label: "Renderer3D",   href: "renderer.html" },
            { label: "Camera3D",    href: "shaders.html" },
            { label: "Skybox",  href: "materiaux.html" },
        ]
    },
    {
        section: "PHYSICS",
        items: [
            { label: "Collider3D",  href: "rigidbody.html" },
            { label: "BoxCollider3D",  href: "colliders.html" },
            { label: "SphereCollider3D", href: "raycasting.html" },
            { label: "CollisionDetector", href: "raycasting.html" },
            { label: "RayCast", href: "raycasting.html" },
            { label: "DebugDrawShapes3D", href: "raycasting.html" },
        ]
    },
    {
        section: "UI",
        items: [
            { label: "UICanvas",           href: "api-classes.html" },
            { label: "UISprite",             href: "api-enums.html" },
            { label: "TextRenderer", href: "api-fonctions.html" },
            { label: "TextData", href: "api-fonctions.html" },
        ]
    },
    {
        section: "Lighting",
        items: [
            { label: "LightingSettings",           href: "api-classes.html" },
            { label: "Light",             href: "api-enums.html" },
            { label: "ConeLight", href: "api-fonctions.html" },
            { label: "PointLight", href: "api-fonctions.html" },
        ]
    },
    {
        section: "Misc",
        items: [
            { label: "ExportGenerator",           href: "api-classes.html" },
            { label: "FloorHeightMap",             href: "api-enums.html" },
        ]
    },
]


function currentPage() {
    const base = document.querySelector("base")?.getAttribute("href") || "/"
    return location.pathname.replace(base, "")
}


// ── Header
function renderHeader() {
    const header = document.querySelector("header")
    if (!header) return

    header.innerHTML = `
    <div class="logo">
      ${SITE.name}<span>${SITE.nameAccent}</span>${SITE.name2}
    </div>
    <div class="version-badge">${SITE.version}</div>
    <div class="header-search">
      Search
    </div>
  `
}

// ── Sidebar
function renderNav() {
    const aside = document.querySelector("aside")
    if (!aside) return

    const page = currentPage()

    aside.innerHTML = NAV.map(group => `
    <div class="nav-section">
      <div class="nav-section-title">${group.section}</div>
      ${group.items.map(item => `
        <a class="nav-item ${item.href === page ? "active" : ""}" href="${SITE.base}${item.href}">
          ${item.label}
        </a>
      `).join("")}
    </div>
  `).join("")
}



document.addEventListener("DOMContentLoaded", () => {
    renderHeader()
    renderNav()
})