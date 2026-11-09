"use client";

import { FormEvent, useState } from "react";

export default function Newsletter({ id = "newsletter" }: { id?: string }) {
  const [subscribed, setSubscribed] = useState(false);

  function subscribe(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubscribed(true);
  }

  return (
    <section className="wrap section" id={id}>
      <div className="newsletter">
        <div>
          <span className="eyebrow">The weekly brief</span>
          <h2>Your edge, delivered.</h2>
          <p>One thoughtful email every Thursday. The stories that matter, a point of view you can use, and zero filler.</p>
        </div>
        <div>
          {subscribed ? (
            <div className="success" role="status">You’re on the list. See you Thursday.</div>
          ) : (
            <form onSubmit={subscribe}>
              <label className="sr-only" htmlFor={`${id}-email`}>Email address</label>
              <input id={`${id}-email`} type="email" required placeholder="you@example.com" autoComplete="email" />
              <button className="btn btn-dark" type="submit">Subscribe</button>
            </form>
          )}
          <small>No spam. Unsubscribe whenever you like.</small>
        </div>
      </div>
    </section>
  );
}
