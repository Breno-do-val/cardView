export class Todo {

    private userId: Number = 0;
    private id: Number = 0;
    private title: String = "";
    private completed: boolean = false;

	constructor($userId: Number , $id: Number , $title: String , $completed: boolean ) {
		this.userId = $userId;
		this.id = $id;
		this.title = $title;
		this.completed = $completed;
	}

    /**
     * Getter $userId
     * @return {Number }
     */
	public get $userId(): Number  {
		return this.userId;
	}

    /**
     * Getter $id
     * @return {Number }
     */
	public get $id(): Number  {
		return this.id;
	}

    /**
     * Getter $title
     * @return {String }
     */
	public get $title(): String  {
		return this.title;
	}

    /**
     * Getter $completed
     * @return {boolean }
     */
	public get $completed(): boolean  {
		return this.completed;
	}

    /**
     * Setter $userId
     * @param {Number } value
     */
	public set $userId(value: Number ) {
		this.userId = value;
	}

    /**
     * Setter $id
     * @param {Number } value
     */
	public set $id(value: Number ) {
		this.id = value;
	}

    /**
     * Setter $title
     * @param {String } value
     */
	public set $title(value: String ) {
		this.title = value;
	}

    /**
     * Setter $completed
     * @param {boolean } value
     */
	public set $completed(value: boolean ) {
		this.completed = value;
	}

}