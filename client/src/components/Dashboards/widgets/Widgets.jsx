import "./widgets.scss";

const Widgets = () => {
  return (
    <div className="widget">
      <div class="category ml-3">
        <button type="button " class="btn active">
          All
        </button>
        <button type="button" class="btn btn text-sub-primary outline-sub-primary mr-2">
          Small
        </button>
        <button type="button" class="btn btn text-sub-primary outline-sub-primary mr-2">
          Medium
        </button>
        <button type="button" class="btn btn text-sub-primary outline-sub-primary mr-2">
          Large
        </button>
      </div>
    </div>
  );
};

export default Widgets;
