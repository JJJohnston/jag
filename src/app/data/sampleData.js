const sampleData = {
  events: [
    {
      id: '1',
      title: 'Project Charter',
      date: '2019-02-11T18:00:00',
      category: 'homework',
      description:
        'Project Charter for JAG\'s KTA application',
      city: 'Victoria, British Columbia',
      venue: 'Proline Management',
      venueLatLng: {
        lat: 48.450091,
        lng: -123.385102
      },
      hostedBy: 'Jesse',
      hostPhotoURL: '/assets/userPhotos/jesse.png',
      attendees: [
        {
          id: 'a',
          name: 'Jesse',
          photoURL: '/assets/userPhotos/jesse.png'
        },
        {
          id: 'b',
          name: 'Aidan',
          photoURL: '/assets/userPhotos/aidan.png'
        },
        {
          id: 'c',
          name: 'Gary',
          photoURL: '/assets/userPhotos/gary.png'
        }
      ]
    },
    {
      id: '2',
      title: 'Team Bios',
      date: '2019-02-11T18:00:00',
      category: 'development',
      description:
        'JAG Team bio',
      city: 'Victoria, British Columbia',
      venue: 'Camosun College Interurban Campus',
      venueLatLng: {
        lat: 48.491941,
        lng: -123.416458
      },
      hostedBy: 'Jesse',
      hostPhotoURL: '/assets/userPhotos/jesse.png',
      attendees: [
        {
          id: 'a',
          name: 'Jesse',
          photoURL: '/assets/userPhotos/jesse.png'
        },
        {
          id: 'b',
          name: 'Aidan',
          photoURL: '/assets/userPhotos/aidan.png'
        },
        {
          id: 'c',
          name: 'Gary',
          photoURL: '/assets/userPhotos/gary.png'
        }
      ]
    }
  ]
};

export default sampleData;