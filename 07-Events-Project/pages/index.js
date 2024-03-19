import Head from 'next/head';
import { getFeaturedEvents } from '../dummy-data';
import EventList from '../components/events/event-list';

function HomePage(props) {
  return (
    <div>
      <Head>
        <title>Next Js Events</title>
        <meta
          name="description"
          content="Find a lot of great events that allow you to evolve..."
        />
      </Head>
      <EventList items={props.featuredEvents} />
    </div>
  );
}

export function getStaticProps() {
  const featuredEvents = getFeaturedEvents();

  return {
    props: {
      featuredEvents: featuredEvents,
    },
    revalidate: 1800,
  };
}
export default HomePage;
