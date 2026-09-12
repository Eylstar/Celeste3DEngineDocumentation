
const SITE = {
    name:    "Celeste",
    nameAccent: "3D",
    name2: "Engine",
    version: "v1.2.0",
    base: ""
}

const NAV = [
    {
        section: "Getting Started",
        items: [
            { label: "What is Celeste3DEngine",   href: "index.html" },
            { label: "Your first Project",   href: "Introduction/Introduction.html" },
            { label: "Engine Persistence",   href: "Introduction/Persistence.html" },
            { label: "Prevent Savestate Crashes",   href: "Introduction/SaveStates.html" },
            { label: "Blender Add-On",   href: "Introduction/BlenderAddon.html" },
        ]
    },
    {
        section: "ENGINE",
        items: [
            { label: "EngineEntity", href: "engine/EngineEntity.html" },
            { label: "Scene3D",     href: "engine/Scene3D.html" },
            { label: "EnginePaths",    href: "engine/EnginePaths.html" },
            { label: "EngineCallbacks",    href: "engine/EngineCallbacks.html" },
        ]
    },
    {
        section: "GAMEOBJECT COMPONENTS",
        items: [
            { label: "GameObject",   href: "components/GameObject.html" },
            { label: "Transform",    href: "components/Transform.html" },
            { label: "MeshRenderer",  href: "components/MeshRenderer.html" },
            { label: "Material",   href: "components/Material.html" },
            { label: "Behaviour",   href: "components/Behaviour.html" },
            { label: "AnimationPlayer",   href: "components/AnimationPlayer.html" },
            { label: "AudioSource",   href: "components/AudioSource.html" },
        ]
    },
    {
        section: "RENDERING",
        items: [
            { label: "Renderer3D",   href: "rendering/Renderer3D.html" },
            { label: "Camera3D",    href: "rendering/Camera3D.html" },
            { label: "Skybox",  href: "rendering/Skybox.html" },
            { label: "DebugDrawShapes3D",  href: "rendering/DebugDrawShapes3D.html" },
        ]
    },
    {
        section: "PHYSICS",
        items: [
            { label: "CollisionSystem", href: "physics/CollisionSystem.html" },
            { label: "Collider3D",  href: "physics/Collider3D.html" },
            { label: "BoxCollider3D",  href: "physics/BoxCollider3D.html" },
            { label: "SphereCollider3D", href: "physics/SphereCollider3D.html" },
            { label: "CollisionDetector", href: "physics/CollisionDetector.html" },
            { label: "RayCast & Ray", href: "physics/RayCast.html" },
            { label: "RayCastHit", href: "physics/RayCastHit.html" },

        ]
    },
    {
        section: "UI",
        items: [
            { label: "UICanvas",           href: "UI/UICanvas.html" },
            { label: "UISprite",             href: "UI/UISprite.html" },
            { label: "TextRenderer", href: "UI/TextRenderer.html" },
            { label: "TextData", href: "UI/TextData.html" },
        ]
    },
    {
        section: "Lighting",
        items: [
            { label: "LightingSettings",           href: "lighting/LightingSettings.html" },
            { label: "Lights (Cone and Point)",             href: "lighting/Lights.html" },
        ]
    },
    {
        section: "Misc",
        items: [
            { label: "JSONPlacements",           href: "misc/JSONPlacements.html" },
            { label: "WindSettings",           href: "misc/WindSettings.html" },
            { label: "FloorHeightMap",           href: "misc/FloorHeightMap.html" },
            { label: "ExportGenerator",             href: "misc/ExportGenerator.html" },
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
    <div class="image-right">
      <img src="blueberry.png" alt="" id="blueberry">
    </div>
  `

    const blueberry = document.querySelector("#blueberry")
    blueberry.addEventListener("click", () => {
        const audio = new Audio("strawberry_touch.wav")
        audio.play()
    })

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

    const savedScroll = sessionStorage.getItem("navScrollPos")
    if (savedScroll !== null) {
        aside.scrollTop = parseInt(savedScroll, 10)
    }

    aside.addEventListener("scroll", () => {
        sessionStorage.setItem("navScrollPos", aside.scrollTop)
    })
}



document.addEventListener("DOMContentLoaded", () => {
    renderHeader()
    renderNav()
})