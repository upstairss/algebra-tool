import Rect from './rect';

export default class Box {
    constructor(x, y, width, height, stroke = false) {
        Object.assign(this, {x, y, width, height, stroke});
        this.type = 'box';
        this.selectable = true;
    }

    render(ctx, options = {}) {
        const { maxId = Infinity, k = 1.0 } = options;
        const id = this.id.includes(':') ? this.id.split(':')[0] : this.id;

        if (id > maxId) {
            ctx.fillStyle = `rgba(0,208,208,${k})`;
            ctx.strokeStyle = `rgba(0,208,208,${k})`;
        }

        if (this.stroke) {
            ctx.strokeRect(this.x, this.y, this.width, this.height);
        } else {
            ctx.fillRect(this.x, this.y, this.width, this.height);
        }

        ctx.fillStyle = options.color;
        ctx.strokeStyle = options.color;
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
        if (this.bounds.contains(x, y)) {
            return {
                is: this.id,
                selectable: this.selectable,
            };
        }
    }
}
