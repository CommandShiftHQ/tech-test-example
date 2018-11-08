import searchMedia from './';
import axios from 'axios';
jest.mock('axios');
axios.get.mockImplementation(() => Promise.resolve({"data": {
    "collection": {
        "href": "https://images-api.nasa.gov/search?q=apollo%2011&description=moon%20landing&media_type=image",
        "items": [
            {
                "href": "https://images-assets.nasa.gov/image/200907190008HQ/collection.json",
                "links": [
                    {
                        "href": "https://images-assets.nasa.gov/image/200907190008HQ/200907190008HQ~thumb.jpg",
                        "render": "image",
                        "rel": "preview"
                    }
                ],
                "data": [
                    {
                        "center": "HQ",
                        "photographer": "NASA/Bill Ingalls",
                        "location": "National Air and Space Museum",
                        "description": "On the eve of the fortieth anniversary of Apollo 11's first human landing on the Moon, Apollo 11 crew member, Buzz Aldrin speaks during a lecture in honor of Apollo 11 at the National Air and Space Museum in Washington, Sunday, July 19, 2009. Guest speakers included Former NASA Astronaut and U.S. Senator John Glenn, NASA Mission Control creator and former NASA Johnson Space Center director Chris Kraft and the crew of Apollo 11.  Photo Credit: (NASA/Bill Ingalls)",
                        "nasa_id": "200907190008HQ",
                        "media_type": "image",
                        "date_created": "2009-07-18T00:00:00Z",
                        "title": "Glenn Lecture With Crew of Apollo 11",
                        "keywords": [
                            "Apollo 11",
                            "Apollo 40th Anniversary",
                            "Buzz Aldrin",
                            "National Air and Space Museum (NASM)",
                            "Washington, DC"
                        ]
                    }
                ]
            },
            {
                "href": "https://images-assets.nasa.gov/image/6900559/collection.json",
                "links": [
                    {
                        "href": "https://images-assets.nasa.gov/image/6900559/6900559~thumb.jpg",
                        "render": "image",
                        "rel": "preview"
                    }
                ],
                "data": [
                    {
                        "center": "MSFC",
                        "keywords": [
                            "Apollo 11",
                            "Saturn V",
                            "Launch"
                        ],
                        "description": "The Apollo 11 mission, the first manned lunar mission, launched from the Kennedy Space Center, Florida via the Saturn V launch vehicle on July 16, 1969 and safely returned to Earth on July 24, 1969.  The Saturn V vehicle produced a holocaust of flames as it rose from its pad at Launch complex 39. The 363 foot tall, 6,400,000 pound rocket hurled the spacecraft into Earth parking orbit and then placed it on the trajectory to the moon. This high angle view of the launch was provided by a ‘fisheye’ camera mounted on the launch tower. The Saturn V was developed by the Marshall Space Flight Center (MSFC) under the direction of Dr. Wernher von Braun. Aboard the spacecraft were astronauts Neil A. Armstrong, commander; Michael Collins, Command Module (CM) pilot; and Edwin E. Aldrin Jr., Lunar Module (LM) pilot.  With the success of Apollo 11, the national objective to land men on the Moon and return them safely to Earth had been accomplished. ",
                        "nasa_id": "6900559",
                        "media_type": "image",
                        "date_created": "1969-07-16T00:00:00Z",
                        "title": "Saturn Apollo Program"
                    }
                ]
            }
        ],
        "links": [
            {
                "href": "https://images-api.nasa.gov/search?page=2&media_type=image&q=apollo+11&description=moon+landing",
                "prompt": "Next",
                "rel": "next"
            }
        ],
        "metadata": {
            "total_hits": 345
        },
        "version": "1.0"
    }
}}));

describe('Search NASA Media API', () => {
   
    it('should call the right endpoint with query parameter', done => {
        expect.assertions(2);
        expect(axios.get).not.toHaveBeenCalled();
        searchMedia('my search query', true, true).then(data => {
            expect(axios.get).toHaveBeenCalledWith('https://images-api.nasa.gov/search', {"params": {"media_type": "image,video", "q": "my search query"}});
            console.log(data);
            done();
        });
    });
})