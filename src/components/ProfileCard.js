import React, { useState } from 'react';
import Avatar3 from '../pics/adventurer-1731961910274.svg';
import bird from '../profilePics/bird.jpg'
import goat from '../profilePics/goat.jpg'
import horse from '../profilePics/horse.jpg'
import dog from '../profilePics/frenchDog.jpg'
import plane from '../profilePics/plane.jpg'

function ProfileCard() {

    const [selectedImage, setSelectedImage] = useState(null);

    const images = [bird, goat, horse, dog, plane];

    const handleImageClick = (image) => {
        setSelectedImage(image)
    }
  
    return (
        <div className="bg-gray-700 text-white p-6 rounded-lg shadow-lg max-w-sm">
            <div className="flex items-center space-x-4">
                <div className="p-0.5 rounded-full bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500">
                    <div className="border-2 border-gray-700 rounded-full p-3 bg-gray-700">
                        <img
                            src={Avatar3}
                            alt="Profile"
                            className="w-20 h-20 rounded-full"
                        />
                    </div>
                </div>
                <div>
                    <h2 className="text-xl font-bold">John Doe</h2>
                    <p className="text-gray-400">Software Developer</p>
                </div>
            </div>
            <div className="mt-4">
                <p className="text-gray-300">"Striving for greatness one line of code at a time."</p>
            </div>
            <div className="mt-6 flex justify-between text-center">
                <div>
                    <p className="text-lg font-semibold">1.2k</p>
                    <p className="text-gray-400">Followers</p>
                </div>
                <div>
                    <p className="text-lg font-semibold">87</p>
                    <p className="text-gray-400">Posts</p>
                </div>
                <div>
                    <p className="text-lg font-semibold">523</p>
                    <p className="text-gray-400">Likes</p>
                </div>
            </div>

            <div className="mt-6 flex justify-center space-x-6">
                {images.slice(0, 3).map((img, index) => (
                    <img
                        key={index}
                        src={img}
                        alt={`pix-${index}`}
                        className="w-24 h-24 rounded-lg cursor-pointer
                             transform transition-transform duration-300 hover:scale-110"
                    />
                ))}
            </div>
            <div className="mt-6 flex justify-center space-x-6">
                {images.slice(3).map((img, index) => (
                    <img
                        key={index}
                        src={img}
                        alt={`pic-${index + 3}`}
                        className="w-24 h-24 rounded-lg cursor-pointer
                                transform transition-transform duration-300 hover:scale-110"
                    />
                ))}
            </div>
        </div>
        
    );
}

export default ProfileCard;