import { useState } from "react";

const Galeria = ({ dados }) => {
  const [info, setInfo] = useState(false);
  // DATA
  const data = dados.hits;

  return (
    <section className="Galeria">
      <label>
        <input
          type="checkbox"
          title="Information"
          onClick={() => setInfo((anterior) => !anterior)}
        />
        Information
      </label>

      <main>
        {data.map(({ id, user, largeImageURL, likes, comments, tags }) => (
          <div className="box" key={id}>
            <figure>
              <img src={largeImageURL} alt={tags} />
            </figure>

            {info ? (
              <div className="inline-info">
                <h3>{user}</h3>
                <span>
                  <ion-icon name="heart-outline"></ion-icon> {likes}
                </span>
                <span>
                  <ion-icon name="chatbox-ellipses-outline"></ion-icon>
                  {comments}
                </span>

                <a
                  href={largeImageURL}
                  title="download"
                  download
                  className="btnDownload"
                >
                  Download
                </a>
              </div>
            ) : (
              false
            )}
          </div>
        ))}
      </main>
    </section>
  );
};
export default Galeria;
