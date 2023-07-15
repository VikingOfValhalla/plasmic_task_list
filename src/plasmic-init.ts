import { initPlasmicLoader } from "@plasmicapp/loader-react";
export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: "fzMachqKCt3KzM1mz3Si3e", // ID of a project you are using
      token:
        "idoF0nVWQ93OsuMDRyMo47JEnt6LZbgroGyRWTAsXEbQnwmJ0YckaN7i0gFxnWxWLG22wHjkIcWXNjOxA", // API token for that project
    },
  ],
  // Fetches the latest revisions, whether or not they were unpublished!
  // Disable for production to ensure you render only published changes.
  preview: true,
});
