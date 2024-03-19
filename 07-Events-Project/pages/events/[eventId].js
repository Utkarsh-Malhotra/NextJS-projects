import { Fragment } from 'react';
import { useRouter } from 'next/router';

import {
  getAllEvents,
  getEventById,
  getFeaturedEvents,
} from '../../dummy-data';
import EventSummary from '../../components/event-detail/event-summary';
import EventLogistics from '../../components/event-detail/event-logistics';
import EventContent from '../../components/event-detail/event-content';
import ErrorAlert from '../../components/ui/error-alert';
import { getStaticPaths } from 'next/dist/build/templates/pages';
import Head from 'next/head';

function EventDetailPage(props) {
  // const router = useRouter();

  // const eventId = router.query.eventId;
  // const event = getEventById(eventId);
  const { event } = props;
  if (!event) {
    return (
      <div className="center">
        <p>Loading....</p>
      </div>
    );
  }

  return (
    <Fragment>
      <Head>
        <title>{event.title}</title>
        <meta name="description" content={event.description} />
      </Head>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </Fragment>
  );
}

export function getStaticProps(context) {
  const eventId = context.params.eventId;
  const event = getEventById(eventId);

  return {
    props: {
      event: event,
    },
    revalidate: 30,
  };
}

export function getStaticPaths() {
  const events = getFeaturedEvents();
  const paths = events.map((event) => ({ params: { eventId: event.id } }));
  return {
    paths: paths,
    fallback: 'blocking',
  };
}
export default EventDetailPage;
