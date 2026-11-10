export default function VideoBox() {
  return (
    <section className="videobox">
      <video
        src="/places.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
    </section>
  );
}