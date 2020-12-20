#version 450

layout(location = 0) in vec2 uv;

layout(location = 0) out vec4 out_color;

vec4 plas(vec2 v, float time) {
  float c = sin(v.x * 10.0) + cos(sin(time + v.y) * 20.0);
  return vec4(sin(c * 0.2 + cos(time)), c * 0.15,
              cos(c * 0.1 + time / .4) * .25, 1.0);
}

void main() {
  vec2 m;
  m.x = atan(uv.x / uv.y) / 3.14;
  m.y = 1 / length(uv) * .2;
  float d = m.y;

  m.x += sin(0.3) * 0.1;
  m.y += 0.25;

  vec4 t = plas(m * 3.14, 1.0) / d;
  out_color = vec4(uv + vec2(0.5), 0.0, 1.0);
  out_color =  t;
}
