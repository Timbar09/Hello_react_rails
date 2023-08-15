import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchGreeting } from '../reducers/greetingsReducer';

const Greeting = () => {
  const dispatch = useDispatch();
  const { greeting, loading, error } = useSelector((state) => state.greetings);

  useEffect(() => {
    dispatch(fetchGreeting());
  }, [dispatch]);

  return (
    <main className="greeting_container">
      {loading && (
        <>
          <svg viewBox="25 25 50 50">
            <circle r="20" cy="50" cx="50"></circle>
          </svg>
        </>
      )}

      {greeting && (
        <>
          <h1 className="greeting">{greeting}</h1>
          <button
            onClick={() => dispatch(fetchGreeting())}
            className="greeting_button"
          >
            Get New Greeting
          </button>
        </>
      )}

      {error && <p className="error_message">Error fetching greeting.</p>}
    </main>
  );
};

export default Greeting;
