import { useState } from "react";
import "./styles.css";

export default function App() {
  const [state, setState] = useState("javascript");

  function ClickHandler(input) {
    var state = input;
    setState(state);
  }

  return (
    <div className="App">
      <h1>📚 goodbooks</h1>
      <p>Checkout my favorite books. Select a genre to get started</p>

      <button className="btn" onClick={() => ClickHandler("javascript")}>
        JavaScript
      </button>
      <button className="btn" onClick={() => ClickHandler("fiction")}>
        Fiction
      </button>
      <button className="btn" onClick={() => ClickHandler("business")}>
        Business
      </button>

      <hr />

      <div>
        {state === "javascript" ? (
          <div>
            <ul className="unordered">
              <li className="list-style">
                <div className="book-style">Eloquent JavaScript</div>
                <div>
                  <small>
                    This book is pure art for the beginner and it also covers
                    various intermediate JavaScript developers concepts.
                  </small>
                </div>
                <div>4/5</div>
              </li>
              <li className="list-style">
                <div className="book-style">You Don't Know JS</div>
                <div>
                  <small>
                    This is not a single book;it is a series of 6 books that are
                    well written and well organized for learning JavaScript.
                    This series of books helps you increase your JavaScript
                    knowledge and cover a deep understanding of concepts.
                  </small>
                </div>
                <div>3.5/5</div>
              </li>
              <li className="list-style">
                <div className="book-style">
                  A Smarter Way to Learn JavaScript
                </div>
                <div>
                  <small>
                    If you have no prior knowledge of the JavaScript language.It
                    covers fundamentals of javaScript. It is also for
                    intermediate JavaScript developers who want to strengthen
                    their understanding of the language
                  </small>
                </div>
                <div>3.7/5</div>
              </li>
            </ul>
          </div>
        ) : null}

        {state === "fiction" ? (
          <div>
            <ul className="unordered">
              <li className="list-style">
                <div className="book-style">Shiva Trilogy</div>
                <div>
                  <small>
                    The Shiva Trilogy book series by Amish Tripathi,the
                    characters in Shiva Trilogy are based on Indian Gods and
                    Goddesses whose backstory can be found in Indian ancient
                    scriptures and epics.
                  </small>
                </div>
                <div>4/5</div>
              </li>
              <li className="list-style">
                <div className="book-style">
                  Harry Potter and the Sorcerer's Stone
                </div>
                <div>
                  <small>
                    Harry Potter and the Philosopher's Stone is a 1997 fantasy
                    novel written by British author J. K. Rowling.This is a
                    series containing 6 more books,revolving around the life of
                    Harry, a wizard, and his journey against classic good versus
                    evil
                  </small>
                </div>
                <div>3.5/5</div>
              </li>
              <li className="list-style">
                <div className="book-style">The Alchemist</div>
                <div>
                  <small>
                    The Alchemist, written by Paulo Coelho is a classic novel
                    that emphasis on the idea that all individuals should live
                    in the singular pursuit of their individual dreams emerges
                    as the primary theme of The Alchemist.
                  </small>
                </div>
                <div>4.8/5</div>
              </li>
            </ul>
          </div>
        ) : null}

        {state === "business" ? (
          <div>
            <ul className="unordered">
              <li className="list-style">
                <div className="book-style">Never Split the Difference</div>
                <div>
                  <small>
                    Book by Christopher Voss and Tahl Raz,as this excellent and
                    fascinating book reveals, there can be empathy,
                    understanding, taking care of people, and even joy in
                    negotiations. This book is ultimately more about emotional
                    intelligence and effective listening than it is about
                    anything else.
                  </small>
                </div>
                <div>4/5</div>
              </li>
              <li className="list-style">
                <div className="book-style">Loonshots</div>
                <div>
                  <small>
                    Safi Bahcall written Loonshots shows how to Nurture the
                    Crazy Ideas That Win Wars, Cure Diseases, and Transform
                    Industries.
                  </small>
                </div>
                <div>3.5/5</div>
              </li>
              <li className="list-style">
                <div className="book-style">Rich Dad Poor Dad</div>
                <div>
                  <small>
                    Robert Kiyosaki, the author of this book offers personal
                    finance education to help you learn about cash flow, real
                    estate, investing, and business building.
                  </small>
                </div>
                <div>4.5/5</div>
              </li>
            </ul>
          </div>
        ) : null}
      </div>
    </div>
  );
}
