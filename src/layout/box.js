import Rect from './rect';

export default class Box {
    constructor(x, y, width, height, stroke = false) {
        Object.assign(this, {x, y, width, height, stroke});
        this.type = 'box';
        this.selectable = true;
    }

    render(ctx) {
        if (this.stroke) {
            ctx.strokeRect(this.x, this.y, this.width, this.height);
        } else {
            ctx.fillRect(this.x, this.y, this.width, this.height);
        }
    }

    get bounds() {
        return new Rect(this.x, this.y, this.width, this.height);
    }

    get advance() {
        return this.width;
    }

    clone() {
        const result = new Box(this.x, this.y, this.width, this.height);
        result.type = 'box';
        Object.assign(result, this);
        return result;
    }

    hitTest(x, y) {
        return this.bounds.contains(x, y) ? this : null;
    }
}
