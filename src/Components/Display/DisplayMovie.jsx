// import React, { useState, useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import axios from 'axios';

// // DisplayMovie component displays details of a selected movie or series, with options to edit or delete the entry
// const DisplayMovie = () => {
//   // Extract the 'id' from the URL parameters
//   const { id } = useParams();
//   // useNavigate hook allows programmatic navigation
//   const navigate = useNavigate();
//   // State to store the fetched movie or series data
//   const [item, setItem] = useState(null);
//   // State to manage whether the user is in editing mode
//   const [isEditing, setIsEditing] = useState(false);
//   // State to manage the form data for editing
//   const [formData, setFormData] = useState({
//     title: '',
//     description: '',
//     year: '',
//     url: '' // Initial URL value for the image
//   });

//   // useEffect hook to fetch the movie/series data when the component mounts or when 'id' changes
//   useEffect(() => {
//     axios.get(`http://localhost:8888/MovieData/${id}`)
//       .then((response) => {
//         // Set the fetched data to 'item' state
//         setItem(response.data);
//         // Populate formData state with the fetched data for editing
//         setFormData({
//           title: response.data.title,
//           description: response.data.description,
//           year: response.data.year,
//           url: response.data.url 
//         });
//       });
//   }, [id]); // Dependency array includes 'id' to re-fetch data if it changes

//   // Function to handle deletion of the movie/series
//   const handleDelete = () => {
//     axios.delete(`http://localhost:8888/MovieData/${id}`)
//       .then(() => {
//         // Navigate back to the homepage after deletion
//         navigate('/');
//       });
//   };

//   // Function to toggle editing mode
//   const handleEditToggle = () => {
//     setIsEditing(!isEditing);
//   };

//   // Function to handle changes in form input fields
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     // Update formData state with the new input value
//     setFormData({ ...formData, [name]: value });
//   };

//   // Function to handle form submission for saving edited data
//   const handleEditSubmit = (e) => {
//     e.preventDefault();
//     axios.put(`http://localhost:8888/MovieData/${id}`, formData)
//       .then(() => {
//         // Update the 'item' state with the new data and exit editing mode
//         setItem(formData);
//         setIsEditing(false);
//       });
//   };

//   // Display loading text while the data is being fetched
//   if (!item) return <div className="text-center text-gray-500">Loading...</div>;

//   return (
//     <div className="flex flex-col min-h-screen">
//       {/* Top section with background image and title */}
//       <div className="relative w-full h-[40vh] bg-gray-300 top-0">
//         <img
//           src={item.url} // Movie/series poster image
//           alt={item.title} // Alt text for the image
//           className="object-cover w-full h-full opacity-80"
//         />
//         <h1 className="absolute inset-0 flex items-center justify-center text-4xl font-bold text-white">
//           {item.title} {/* Movie/series title displayed on top of the image */}
//         </h1>
//       </div>

//       {/* Main content section */}
//       <main className="flex-grow flex flex-col items-center bg-white p-8 shadow-md">
//         <div className="max-w-6xl w-full mt-8 flex flex-col md:flex-row items-center">
//           {/* Movie/series image and details */}
//           <img className="w-64 h-auto rounded-lg shadow-md mb-6 md:mb-0 md:mr-8" key={item.id} src={item.url} alt={item.title} />
//           <div className="text-left">
//             <h1 className='text-xl font-bold'>{item.title}</h1>
//             <p className="text-gray-700 mb-4">{item.description}</p>
//             <p className="text-gray-600"><strong>Country:</strong> {item.country}</p>
//             {/* <p className="text-gray-600"><strong>Genre:</strong> {item.genre}</p> */}
//             <p className="text-gray-600"><strong>Year:</strong> {item.year}</p>
//             <p className="text-gray-600"><strong>Type:</strong> {item.type}</p>
//             <div className="mt-6">
//               {/* Edit and Delete buttons */}
//               <button
//                 onClick={handleEditToggle}
//                 className="bg-blue-500 text-white px-4 py-2 rounded-md mr-4 hover:bg-blue-600"
//               >
//                 {isEditing ? 'Cancel' : 'Edit'} {/* Toggle button label */}
//               </button>
//               <button
//                 onClick={handleDelete}
//                 className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
//               >
//                 Delete
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Form for editing movie/series details, only visible in editing mode */}
//         {isEditing && (
//           <form onSubmit={handleEditSubmit} className="mt-8 w-full max-w-3xl">
//             <div className="flex flex-col mb-4">
//               <label className="mb-2 text-gray-600">Title:</label>
//               <input
//                 type="text"
//                 name="title"
//                 value={formData.title}
//                 onChange={handleInputChange}
//                 className="p-2 border border-gray-300 rounded-md"
//               />
//             </div>
//             <div className="flex flex-col mb-4">
//               <label className="mb-2 text-gray-600">Description:</label>
//               <textarea
//                 name="description"
//                 value={formData.description}
//                 onChange={handleInputChange}
//                 className="p-2 border border-gray-300 rounded-md"
//               />
//             </div>
//             <div className="flex flex-col mb-4">
//               <label className="mb-2 text-gray-600">Year:</label>
//               <input
//                 type="number"
//                 name="year"
//                 value={formData.year}
//                 onChange={handleInputChange}
//                 className="p-2 border border-gray-300 rounded-md"
//               />
//             </div>
//             <div className="flex flex-col mb-4">
//               <label className="mb-2 text-gray-600">Image URL:</label>
//               <input
//                 type="text"
//                 name="url"
//                 value={formData.url}
//                 onChange={handleInputChange}
//                 className="p-2 border border-gray-300 rounded-md"
//               />
//             </div>
//             <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600">
//               Save {/* Save changes */}
//             </button>
//           </form>
//         )}
//       </main>
//     </div>
//   );
// };

// export default DisplayMovie;





import React, { useState, useEffect, forwardRef, useRef } from "react"
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import "./style.css"
import * as THREE from 'three'
import { Canvas, useFrame, useThree  } from '@react-three/fiber'
import { CubeCamera, Float, Html, MeshReflectorMaterial, OrbitControls, PerspectiveCamera } from '@react-three/drei'
import { EffectComposer, GodRays, Bloom } from '@react-three/postprocessing'
import { easing } from 'maath'



const DisplayMovie = () => {
    // Extract the 'id' from the URL parameters
  const { id } = useParams();
  // useNavigate hook allows programmatic navigation
  const navigate = useNavigate();
  // State to store the fetched movie or series data
  const [item, setItem] = useState(null);
  // State to manage whether the user is in editing mode
  const [isEditing, setIsEditing] = useState(false);
  // State to manage the form data for editing
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    year: '',
    url: '' // Initial URL value for the image
  });

  // useEffect hook to fetch the movie/series data when the component mounts or when 'id' changes
  useEffect(() => {
    axios.get(`http://localhost:8888/MovieData/${id}`)
      .then((response) => {
        // Set the fetched data to 'item' state
        setItem(response.data);
        // Populate formData state with the fetched data for editing
        setFormData({
          title: response.data.title,
          description: response.data.description,
          year: response.data.year,
          url: response.data.url 
        });
      });
  }, [id]); // Dependency array includes 'id' to re-fetch data if it changes


  const cameraRef = useRef();
  const [cameraPosition, setCameraPosition] = useState([0, 0, 0]);
  
  // Update the camera position every frame
  // useFrame(() => {
  //   const camera = cameraRef.current;
  //   camera.position.set(...cameraPosition);
  // });
  const handleButtonClick = () => {
    setCameraPosition([0, 0, 0]);
  };

  return(
    <>
    {item ? (
      <>
    <Canvas 
    // camera={{ position: [0, 0, 0] }} 
    >

          <PerspectiveCamera ref={cameraRef} position={cameraPosition} />
          <CameraControls cameraRef={cameraRef} />

    <color attach="background" args={['black']} />
    {/* <fog attach="fog" args={["grey", 8, 35]} /> */}
    
    <ambientLight />
    {/** The screen uses postpro godrays */}
    {/* <Screen /> */}
  
    <group>
      <Html transform position={[0, 7, -16]}>
      <div className='singleHeading'>
          <h1>{item.title} </h1> <span> | {item.title} | </span> <span> HD </span>
      </div>
      </Html>

     <Emitter url={item.url} />
     
    </group>

    <Html transform position={[-18, 2, -10]} rotation={[0, 70, 0]}>
    <div className='card'>
        <div className='cast'>
        <h4>
                <span>About </span>
                {item.title}
              </h4>
              <br></br>
              <br></br>
              <h4>
                <span>Starring </span>
                {item.country}
              </h4>
              <h4>
                <span>Genres </span>
                {item.type}
              </h4>
              <h4>
                <span>Tags </span>
                {item.tags}
              </h4>
            </div>

        {/* <h3>Date : {item.date}</h3> */}
        
    </div>
    </Html>

    <Html transform position={[0, -5, -8]}>
    <button className="dbutton" >
        FullScreen
      </button>
    </Html>

    



    <Floor />
    {/* <OrbitControls /> */}
    <Rig />
  </Canvas>
  

  </>
      ) : (
        "no"
      )}
    </>

  )
}


export default DisplayMovie;

function CameraControls({ cameraRef }) {
  useFrame(() => {
    const camera = cameraRef.current;
    const cameraPosition = [0, 0, 10]; // Updated camera position
    camera.position.set(...cameraPosition);
  });

  return null; // Return null as this component doesn't render anything
}

function Rig({ vec = new THREE.Vector3() }) {
  const mouse = new THREE.Vector2();
  const cameraPosition = new THREE.Vector3(1, 0.5, 3);

  // Update mouse position based on mouse movement
  const handleMouseMove = (event) => {
    mouse.x = (event.clientX / window.innerWidth) * 4-3;
  };

  // Add event listener to track mouse movement
  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Update camera position on each frame
  useFrame((state) => {
    const targetPosition = cameraPosition.clone().add(new THREE.Vector3(mouse.x, 0, 0));
    state.camera.position.lerp(targetPosition, 0.1);
    state.camera.lookAt(0, 0, 0);
  });
}


const Floor = () => (
  <mesh position={[0, -5.02, 0]} receiveShadow rotation={[-Math.PI / 2, 0, 0]}>
    <planeGeometry args={[70, 70]} />
    <MeshReflectorMaterial
      blur={[300, 50]}
      resolution={512}
      mixBlur={1}
      mixStrength={100}
      roughness={0.5}
      depthScale={1.2}
      minDepthThreshold={0.4}
      maxDepthThreshold={1.4}
      color="#202020"
      metalness={0.8}
    />
  </mesh>
)
const Emitter = forwardRef((props, ref) => {
  const { url } = props;

  const [image] = useState(() => {
    const img = new Image();
    img.src = url;
    img.crossOrigin = 'Anonymous';
    return img;
  });

  const [texture, setTexture] = useState(null);

  useEffect(() => {
    const textureLoader = new THREE.TextureLoader();
    textureLoader.load(url, (loadedTexture) => {
      loadedTexture.encoding = THREE.sRGBEncoding;
      setTexture(loadedTexture);
    });
  }, [url]);

  return (
    <mesh ref={ref} position={[0, 0, -16]} {...props}>
      <planeGeometry args={[10, 10]} />
      <meshStandardMaterial map={texture} intensity={6} />
      <mesh scale={[16.05, 10.05, 1]} position={[0, 0, -0.01]}>
        <planeGeometry args={[20, 10]} />
        <meshStandardMaterial color="black" />
      </mesh>
    </mesh>
  );
});


function Screen() {
  const [material, set] = useState()
  return (
    <>
      <Emitter ref={set} />
      {material && (
        <EffectComposer disableNormalPass multisampling={8}>
          <GodRays sun={material} exposure={0.34} decay={0.75} blur />
          <Bloom luminanceThreshold={0} mipmapBlur luminanceSmoothing={0.0} intensity={1} />
        </EffectComposer>
      )}
    </>
  )
}