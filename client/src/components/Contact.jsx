import { useEffect, useState } from 'react';

export default function Contact({ listing }) {
  const [landlord, setLandlord] = useState(null);
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  // Handle message input change
  const onChange = (e) => {
    setMessage(e.target.value);
    setSuccess(false);
    setError('');
  };

  // Fetch landlord details
  useEffect(() => {
    const fetchLandlord = async () => {
      try {
        const res = await fetch(`/api/user/${listing.userRef}`);
        const data = await res.json();

        if (!data || !data.email) {
          throw new Error('Landlord data is incomplete.');
        }

        setLandlord(data);
      } catch (error) {
        console.error('Error fetching landlord:', error);
        setError('Could not fetch landlord data.');
      }
    };
    fetchLandlord();
  }, [listing.userRef]);

  // Send message to the landlord
  const handleSendMessage = async () => {
    if (!message.trim()) {
      setError('Please enter a message before sending.');
      return;
    }

    // Retrieve current user from sessionStorage
    const storedUser = sessionStorage.getItem('currentUser');
    if (!storedUser) {
      setError('User not logged in. Please sign in again.');
      return;
    }

    let currentUser;
    try {
      currentUser = JSON.parse(storedUser);
    } catch (error) {
      console.error('Error parsing user data from sessionStorage:', error);
      setError('User data is corrupted. Please sign in again.');
      return;
    }

    if (!currentUser.email) {
      setError('Logged-in user email not found. Please sign in again.');
      return;
    }

    if (!landlord || !landlord.email) {
      setError('Landlord data is not available.');
      return;
    }

    // Prepare message data
    const messageData = {
      landlordEmail: landlord.email,
      username: currentUser.username,
      listingName: listing.name,
      message: message,
      userEmail: currentUser.email,
    };

    console.log('Sending Message Data:', messageData);

    // Send the message to the backend
    try {
      const res = await fetch(`http://localhost:5000/api/contact/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(messageData),
      });

      const data = await res.json();
      if (data.success) {
        alert('Email sent successfully.');
        setMessage(''); // Clear the message input
        setSuccess(true);
      } else {
        setError(data.message || 'Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setError('Failed to send message. Please try again.');
    }
  };

  return (
    <>
      {landlord ? (
        <div className="flex flex-col gap-2">
          <p>
            Contact <span className="font-semibold">{landlord.username}</span> for{' '}
            <span className="font-semibold">{listing.name.toLowerCase()}</span>
          </p>
          <textarea
            name="message"
            id="message"
            rows="2"
            value={message}
            onChange={onChange}
            placeholder="Enter your message here..."
            className="w-full border p-3 rounded-lg"
          ></textarea>

          {error && <p className="text-red-500">{error}</p>}
          {success && <p className="text-green-500">Your message has been sent!</p>}

          <button
            onClick={handleSendMessage}
            className={`bg-slate-700 text-white text-center p-3 uppercase rounded-lg hover:opacity-95 ${
              !message.trim() ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            disabled={!message.trim()} // Disable button if message is empty
          >
            Send Message
          </button>
        </div>
      ) : (
        <p>Loading landlord information...</p> // Show loading state if landlord data is not available
      )}
    </>
  );
}
