

#version 460 core

in vec4 InColor;
out vec4 OutColor

void main(){
    OutColor = InColor
}







/*
out vec4 FragColor;

void main()
{
    FragColor = vec4(1.0f, 0.5f, 0.2f, 0.1f);
} 




#version 430 core

out vec4 color;

void main()
{
    float b = 16;
    float c = (int(gl_FragCoord.y/b) + int(gl_FragCoord/b)) % 2;
    color = vec4(1.0f*c, 1.0f*c, 1,0f*c, 1.0f*c);
}
*/