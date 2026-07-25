import BookDetails from "./Components/BookDetails";
import BlogDetails from "./Components/BlogDetails";
import CourseDetails from "./Components/CourseDetails";
import "./App.css";

function App() {
  const showBooks = true;
  const showBlogs = true;
  const showCourses = true;
  const showDetails = true;

  let bookSection;
  if (showBooks) {
    bookSection = <BookDetails />;
  } else {
    bookSection = <p>Book details are hidden.</p>;
  }

  const blogSection = showBlogs ? (
    <BlogDetails />
  ) : (
    <p>Blog details are hidden.</p>
  );

  const detailsContent = (
    <div className="details-container">
      <section className="details-column">{bookSection}</section>
      <section className="details-column">{blogSection}</section>
      <section className="details-column">
        {showCourses && <CourseDetails />}
      </section>
    </div>
  );

  return (
    <main className="app">
      <h1>Blogger App</h1>
      {showDetails ? detailsContent : <p>No details are available.</p>}
    </main>
  );
}

export default App;
