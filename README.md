<p>
    <img alt="Grid Matrix Logo" width="350" src="https://jbmd-website.s3.amazonaws.com/gridmatrix/grid-matrix-full-01.png">
    <br>
    Simple react grid component to handle your grid needs
</p>

### Back Story

With the increase of card designs inside websites, there is a huge need for grids either on a multiple level of a website or something as simple as showing an image beside text.

<i>Why does this have to be so painful?</i>

Supporting two sections is fine, but then mobile, then tablet. Then you need to support super large website now. Oh look my content looks like crap now. My image is stretched way more than it should have been, can't use per screenshot image sources. And now my design for opportune website of 1200px looks bad on anything smaller or bigger than that.

<b>Introducing Grid Matrix!</b>

A simple react grid component to handle your grid needs, some key features are:

- Allow alignment to center, top, bottom, left or right, or use our more intense support of `center-top` | `middle-top` | `left-top` | `right-top` | `center-middle` |  `middle-middle` |  `left-middle` |  `right-middle` |`center-center` | `middle-center` | `left-center` | `right-center` | `center-bottom` | `middle-bottom` | `left-bottom` | `right-bottom`

or specify your `xAlign` and `yAlign` levels for your own overrides

- Support per screenshot breakdown views, specify how your medium (<768px) breakdown will show differently than your xxxl screensize (>1536px)

- `StackedGrid`, stacking content is a pain, thats why out of the box you can stack `Grid` on `Grid` on `Grid`

and many other cool features...

### Requirements

- Node Version: 16
- Typescript (5.2.2 or higher)

#### Running Locally

We have storybook set up in this repo, so to run it locally, please run

```
npm install 

** Note, you may need --force 
```

then run 

```
npm storybook
```

This should open your primary website to `localhost:6006` so that you can interact with the various pieces of Grid Matrix

### Components

#### Pre-requirement

When using `<Grid />` you will need to wrap the component with a `width` and `height`, almost like a containment field for the grid component.

#### Grid

Description: Grid of content aligned in your perferred way

Example:
```
<Grid
  sections: GridSectionProps[]
/>
```

#### StackedGrid

Description: Stacking multiple Grid of information all in one place

Example:
```
<StackedGrid
  grids: GridWithLevelRequiredProps[]
/>
```

### Features

There is a lot of features inside this package, but some of the key ones that make this helper component are:

#### Alignments 

Description: Allows you to specify where you section will be placed inside the Grid component.

Props inside `GridSectionProps`

`align` - Allow you to specify where your item is places inside the Grid,

ex1. `center-center` will place the section in the middle middle
ex2.  `center-bottom` will place the section in the center but at the bottom

You can also use them separate:

`xAlign` - Allows you to specify the x-axis alignment of section

`yAlign` - Allows you to specify the x-axis alignment of section

ex1. 
```
xAlign: 'left'
yAlign: 'top'
// will display the left side at the top of the Grid component
```

#### Breakpoints

Description: You can pass in individual breakdowns for screensizes to the Grid component

Props inside `GridSectionProps`

`xsSection`, `smSection`, `mdSection`, `lgSection`, `xlSection`, `xxlSection`, `xxxlSection`

They all take in `GridSectionProps[]` which is just the standard `sections` prop for the Grid component, but if specified it will render this unique per page size

:gift: oh and don't worry, we rerender it ourselves if people increase or descrease the screen

#### Spacers

Description: Sometimes when using `margin` and `padding` it sometimes breaks your UI, so we decided to allow a Spacer type, if you send in `GridSectionProps` without a `content` it will treat it like a Spacer

Example:
```
// ... another 40% cover section
{
  cover: 20,
  align: 'bottom'
}
// ... another 40% cover section
```
This will separate the two sides with a 20% Spacer

#### Override Styles

Description: Now we know sometimes packages restrict your abilities to create slight changes you need, so we have opened up allowing you to also add custom classes or styles

(This is supported in both the `StackedGrid` or `Grid` components)

Props inside `GridProps`

`className` : Custom class name for additional styling

`styles` : Inline styles for additional styling

`transform` : Support the CSS transform property on the top component. This can be a combination of rotation, scaling, translating, skewing, and more.




### TODO:
- Migrate from deprecated ComponentStory, ComponentMeta
- Update storybook examples with images
- Support containment field inside `<Grid>` directly
- Accessibility labels (and the ability to hide specific sections from readers)

### Support

#### Have issues? Or recommendation?

:envelope: <a href="mailto:support@juiceboxmonkeydesigns.com">Email Us</a>


#### Contributors

:star: <a href="https://github.com/tylerhackbart" target="_blank">@tylerhackbart</a>

:star: <a href="https://github.com/ajaimaxwel-pmd" target="_blank">@ajaimaxwel-pmd</a>


Help support us, by keeping up up all night and buying us a coffee

:coffee: <a href="https://link.juiceboxmonkeydesigns.com/5F9hI2" target="_blank"> Buy a coffee </a>
