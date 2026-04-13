const AnnouncementBar = () => {
  const messages = [
    "Complimentary Express Shipping",
    "Not Mass Produced · Handcrafted",
  ];

  return (
    <div className="bg-announcement overflow-hidden">
      <div className="flex animate-marquee-fast whitespace-nowrap py-2">
        {[...Array(10)].map((_, i) => (
          <span key={i} className="mx-8 text-xs tracking-widest uppercase text-announcement-foreground font-sans">
            {messages[i % messages.length]}
          </span>
        ))}
      </div>
    </div>
  );
};

export default AnnouncementBar;
