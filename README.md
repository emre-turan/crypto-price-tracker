This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on **Vercel**

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

### Tech Stack

- **React.js**
- **TypeScript**
- **Shadcn UI Library**
- **Next.js**
- **Tanstack Query**
- **Tanstack Table**
- **Echarts**
- **Tailwind CSS**
- **ESLint & Prettier**
- **Git**

# Overview

I designed this project to ensure that users always have access to the most up-to-date data while also leveraging the benefits of Server-Side Rendering (SSR) for performance and SEO. Here's a breakdown of the strategies employed:

## Data Fetching and Caching Strategy

### Fetch with `cache: 'no-store'`

- **Purpose**: Ensures that data is fetched a new on each request.
- **Why**: This is crucial for displaying the most current data to our users. It mimics the behavior of `getServerSideProps`, where data is fetched server-side for each request, ensuring that users see the latest information without any cached delays. When building the application statically on deployment, with `no-cache`, the data will be fetched on each request, providing real-time data to users. This strategy is particularly useful for applications that require up-to-date information, such as financial data, news feeds, or real-time analytics.

### SSR for Initial Load

- **Purpose**: Utilizes SSR to fetch data on the server for the initial page load.
- **Why**: This improves the initial load time (time to first paint) and enhances SEO by serving fully rendered pages to search engines. It provides a faster, more seamless user experience and helps in ranking the site better on search platforms.

But how do we ensure that the data is always up-to-date? After the first load, the client-side hydration and updates take over to keep the data fresh and interactive. For this, we use TansStack Query for data management on the client-side.

### Client-side Hydration and Updates

- **Purpose**: After the initial server-side fetch, the React application is hydrated on the client. With TanStack Query, we manage the data on the client-side, fetching updates as needed. I set the refetch interval to 60 seconds to fetch the data from the server. This can be adjustable according to the requirements. Because this choice might can cause the performance issues with larger applications. But for this application, I think it's okay.

### Talk About the Table

- For the table, I'm using Tanstack-Table with shadcnUI. Users can sort the coins by price and search them by name. We can adjust the column filtering with global filtering for the table, but for this challenge, I'm not implementing global filtering for simplicity (and due to time constraints 🙂).
- Users can also select coins to track. I store the selected coins in local storage so that if the user refreshes the page, the selected coins will still be there. While this is not the optimal way to store data, for this challenge, I'm using local storage for simplicity. If I had more time, I would implement authentication using next-auth or Clerk to store the data on the server.

### Talk About the Chart

- For Chart, I'm using the Echarts which is super cool and simple to use. I also use echarts-for-react to use Echarts in the react app. Again, In a different function, I'm fetching the data from the api and displaying it in the chart. Currently I'm displaying the 1 month price history in daily interval for the selected coin. I just add a prop to the chart component to display the selected coin's price history. I can add the select mechanism for the users but for this challenge, I'm not implementing it.

These strategies are implemented to ensure that the application is robust, performs efficiently, and provides up-to-date information to the users without compromising on the user experience or SEO benefits.

### Talk About the Theme

- Yeah, I love the dark theme. However, not everyone loves it. Therefore, I incorporated a theme switcher into the application. Users can easily switch between light and dark themes. I utilize the `useTheme` hook from `next-themes` to handle the theme. The theme is saved in local storage, ensuring it persists even if the user refreshes the page. Additionally, I included a theme switcher in the navbar (kinda) for convenient access.

### Commit History

- It's very important to have a clean commit history. I always try to keep my commits clean and meaningful. I also use the conventional commit messages to keep the commit history clean and understandable. But, for this challenge, I'm not following the conventional commit messages due to time constraints. I'm just writing the commit messages as I go. I'm sorry for that.

### Warning about API

- Due to nature of the API, it's not always possible to fetch the data. Sometimes, the API returns the 429 status code which means the rate limit exceeded. In this case, I'm displaying the error message to the user. Please be aware of this issue.

### Conclusion

I hope you find this project interesting and that it meets your expectations. I enjoyed working on it and implementing the various features. I look forward to hearing your feedback and any suggestions you may have. Thank you for the opportunity, and I hope to hear from you soon!
