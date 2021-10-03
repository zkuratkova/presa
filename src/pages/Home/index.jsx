import React from 'react';
import { courses } from '../../data/courses';
import Course from '../../components/Course';

const Home = () => {
  return (
    <div id="home" className="home">
      <section className="about-us">
        <h2 className="headline__section">O nás</h2>
        <p>
          Tady bude nějaký text Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Consequuntur, voluptatem voluptas quasi cum officia
          eius ab, aperiam corrupti incidunt, ducimus laboriosam laudantium
          labore nesciunt laborum neque repudiandae deserunt sed! Aliquid?
        </p>
        <p>
          Officiis itaque sed maiores voluptates, expedita voluptate. Temporibus
          repellendus facere dignissimos sit omnis ipsa, dicta, ducimus saepe
          velit animi praesentium vitae aspernatur? Natus delectus nisi
          temporibus accusamus ad ipsam minima. Consequatur omnis, quo dolore
          perferendis laudantium soluta odit ea necessitatibus consequuntur
          sequi autem mollitia accusamus voluptate, est sint inventore sapiente
          illo nostrum nisi exercitationem quaerat maiores cupiditate eius.
          Quidem, officiis. Doloribus mollitia corrupti debitis possimus
          inventore cumque architecto? Deserunt dicta architecto vitae
          laudantium optio nostrum, aliquid sit reiciendis reprehenderit dolores
          modi aspernatur minus a accusantium suscipit cupiditate voluptatum,
          sapiente consequuntur?
        </p>
        <p>
          Facere minus, et iure quia placeat asperiores voluptas enim nemo
          necessitatibus! Accusantium amet vitae tempore maiores. Quia
          exercitationem, quidem deleniti dolor facilis, hic voluptate, beatae
          perspiciatis tempora minima in nesciunt!
        </p>
      </section>
      <section className="courses-offer">
        <h2 className="headline__section">Nabídka kurzů</h2>
        <div className="courses">
          {courses.map((item) => (
            <Course
              key={item.courseId}
              name={item.courseName}
              text={item.courseText}
              img={item.courseImg}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
