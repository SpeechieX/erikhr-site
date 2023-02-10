import React, { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";

export default function Box(props) {
	const mesh = useRef(null);
	const [hovered, setHover] = useState(false);
	const [active, setActive] = useState(false);
	useFrame((state, delta) => {
		mesh.current.rotation.x += 0.011;
		mesh.current.rotation.y += 0.011;
	});
	return (
		<mesh
			{...props}
			ref={mesh}
			scale={active ? 1.5 : 1}
			onClick={(event) => setActive(!active)}
			onPointerOver={(event) => setHover(true)}
			onPointerOut={(event) => setHover(false)}
		>
			<boxGeometry args={[3, 3, 3, 9, 9, 9]} />
			<meshStandardMaterial
				color={hovered ? "rgb(246, 26, 99);" : "#393939"}
				wireframe={true}
			/>
		</mesh>
	);
}
