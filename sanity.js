// This is file is a combination of sanity.js and config.js files found in the tutorial shown below
// https://www.sanity.io/guides/sanity-nextjs-tailwindcss

import {
    createClient,
    createPortableTextComponent,
    createImageUrlBuilder,
    createPreviewSubscriptionHook,
    createCurrentUserHook
  } from "next-sanity";


export const config = {
    /**
     * Find your project ID and dataset in `sanity.json` in your studio project.
     * These are considered “public”, but you can use environment variables
     * if you want differ between local dev and production.
     *
     * https://nextjs.org/docs/basic-features/environment-variables
     **/
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    apiVersion: "2021-08-11", // or today's date for latest
    /**
     * Set useCdn to `false` if your application require the freshest possible
     * data always (potentially slightly slower and a bit more expensive).
     * Authenticated request (like preview) will always bypass the CDN
     **/
    useCdn: process.env.NODE_ENV === "production",
  };

//   set up the client for fetching data in the getProps page functions
export const sanityClient = createClient(config);

// helper function for generating image urls
export const urlFor = source => createImageUrlBuilder(config).image(source);

// helper function for using the current logged in user account
export const currentUser = source => createCurrentUserHook(config);




