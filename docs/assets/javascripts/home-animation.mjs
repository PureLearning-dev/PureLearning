const animeModule = () => import("./vendor/anime.esm.min.js");

const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

let activeScope;
let navigationRevision = 0;

function stopPreviousRun() {
  if (!activeScope) return;
  activeScope.revert();
  activeScope = undefined;
}

async function initialiseHomeMotion(body = document) {
  const revision = ++navigationRevision;
  stopPreviousRun();

  const root = body.querySelector?.(".kb-home");
  if (!root || reducedMotion.matches) return;

  let anime;
  try {
    anime = await animeModule();
  } catch (error) {
    console.warn("Homepage motion could not be loaded.", error);
    return;
  }

  if (revision !== navigationRevision || !root.isConnected) return;

  const { animate, createScope, cubicBezier, stagger } = anime;
  const easeOut = cubicBezier(0.16, 1, 0.3, 1);

  activeScope = createScope({ root }).add(() => {
    const heroCopy = root.querySelector(".kb-home-hero-copy");
    const canvasBoard = root.querySelector(".kb-home-canvas-board");
    const paths = root.querySelectorAll(".kb-home-canvas-paths path");
    const marks = root.querySelectorAll(".kb-home-node-mark");
    const nodeCopy = root.querySelectorAll(
      ".kb-home-node-title, .kb-home-node small",
    );

    root.dataset.kbMotion = "anime";

    if (heroCopy) {
      animate(heroCopy, {
        opacity: [0, 1],
        y: [8, 0],
        duration: 420,
        ease: easeOut,
      });
    }

    if (canvasBoard) {
      animate(canvasBoard, {
        opacity: [0, 1],
        y: [8, 0],
        delay: 60,
        duration: 420,
        ease: easeOut,
      });
    }

    if (paths.length) {
      animate(paths, {
        opacity: [0, 1],
        x: [-3, 0],
        delay: stagger(45, { start: 160 }),
        duration: 300,
        ease: easeOut,
      });
    }

    if (marks.length) {
      animate(marks, {
        opacity: [0, 1],
        scale: [0.94, 1],
        rotate: [-3, 0],
        delay: stagger(48, { start: 190 }),
        duration: 420,
        ease: easeOut,
      });
    }

    if (nodeCopy.length) {
      animate(nodeCopy, {
        opacity: [0, 1],
        y: [5, 0],
        delay: stagger(22, { start: 230 }),
        duration: 420,
        ease: easeOut,
      });
    }

    return () => {
      delete root.dataset.kbMotion;
    };
  });
}

if (window.document$?.subscribe) {
  window.document$.subscribe(({ body }) => initialiseHomeMotion(body));
} else if (document.readyState === "loading") {
  document.addEventListener(
    "DOMContentLoaded",
    () => initialiseHomeMotion(document),
    { once: true },
  );
} else {
  initialiseHomeMotion(document);
}
