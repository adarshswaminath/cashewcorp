import React from 'react';

const awardData = [
  {
    id: 1,
    imageSrc: '/images/gallery/awards/1.jpg',
    title: 'Award Title 1',
    description: 'Minim pariatur irure nostrud consequat nulla proident.',
  },
  {
    id: 2,
    imageSrc: '/images/gallery/awards/2.jpg',
    title: 'Award Title 2',
    description: 'Minim pariatur irure nostrud consequat nulla proident.',
  },
  {
    id: 3,
    imageSrc: '/images/gallery/awards/3.jpg',
    title: 'Award Title 3',
    description: 'Minim pariatur irure nostrud consequat nulla proident.',
  },
  {
    id: 4,
    imageSrc: '/images/gallery/awards/4.jpg',
    title: 'Award Title 4',
    description: 'Minim pariatur irure nostrud consequat nulla proident.',
  },
];

function AwardImages() {
  return (
    <div  className="grid gap-4 grid-cols-1 lg:grid-cols-4 p-3">
      {awardData.map((award) => (
        <div data-aos="flip-up" key={award.id}>
          <img src={award.imageSrc} alt={`Award ${award.id}`} />
          <div>
            <h3 className="text-lg font-bold">{award.title}</h3>
            <p>{award.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default AwardImages;
