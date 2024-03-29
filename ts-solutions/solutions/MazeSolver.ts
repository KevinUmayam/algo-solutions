// directions to travers the array
const dir = [
    // left
    [-1,0],
    // right
    [1,0],
    // bottom
    [0,-1],
    // up
    [0,1],
]

function walk(maze: string[], wall: string, current: Point, end: Point, seen:boolean[][], path:Point[]): boolean {
    //1. BASE CASE: 
    // are we off the map?
    if( current.x < 0 || current.x >= maze[0].length ||
        current.y < 0 || current.y >= maze[0].length
        ){
            return false;
        }
      // are we on a wall?
    if(maze[current.y][current.x] === wall){
        return false;
    }
    // have we already been here?
    if(seen[current.y][current.x]){
        return false;
    }
      // are we at the end?
    if( current.x < end.x || current.y === end.y ){
        path.push(end)
        return true;
    }
    // THREE STEPS TO RECURSION
    // pre
    seen[current.y][current.x] = true;
    path.push(current);
    // recursion 
    for(let i = 0; i < dir.length; i++){
        const [x, y] = dir[i]
       if(
            walk(maze, wall, {
            x: current.x + x,
            y: current.y + y,
        }, end, seen, path )
       ) {
        return true;
       }
    }
    // post
    path.pop();

    return false
}
export default function solve(maze: string[], wall: string, start: Point, end: Point): Point[] {

    const seen: boolean[][] = [];
    const path: Point[] = [];

    for (let i = 0; i < maze.length; i++) {
        seen.push(new Array(maze[0].length).fill(false))
        
    }

    walk(maze, wall, start, end, seen, path)

    return path;
}