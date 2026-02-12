varying float vOpacity;

void main() {
    float d = length(gl_PointCoord - vec2(0.5));
    if (d > 0.5) discard;
    float alpha = smoothstep(0.5, 0.1, d) * vOpacity;
    gl_FragColor = vec4(0.65, 0.95, 0.99, alpha);
}
