uniform float uTime;
uniform float uScroll;
attribute float aSize;
attribute float aOpacity;
varying float vOpacity;

void main() {
    vec3 pos = position;
    pos.y += sin(uTime * 0.3 + position.x) * 0.2;
    pos += normalize(pos) * uScroll * -0.5;

    vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
    gl_PointSize = aSize * (80.0 / -mvPosition.z);
    gl_Position = projectionMatrix * mvPosition;
    vOpacity = aOpacity;
}
