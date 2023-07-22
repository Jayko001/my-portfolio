import cover from "../assets/blog2cover.png"

export default function Blog2() {
  return (
    <div className="relative bg-white">
      <div className="mx-auto max-w-7xl lg:flex lg:justify-between lg:px-8 xl:justify-end">
        <div className="lg:flex lg:w-1/2 lg:shrink lg:grow-0 xl:absolute xl:inset-y-0 xl:right-1/2 xl:w-1/2">
          <div className="relative h-80 lg:-ml-8 lg:h-auto lg:w-full lg:grow xl:ml-0">
            <img
              className="absolute inset-0 h-full w-full bg-gray-50 object-cover"
              src={cover}
              alt=""
            />
          </div>
        </div>
        <div className="px-6 lg:contents">
          <div className="mx-auto max-w-2xl pb-24 pt-16 sm:pb-32 sm:pt-20 lg:ml-8 lg:mr-0 lg:w-full lg:max-w-lg lg:flex-none lg:pt-32 xl:w-1/2">
            <p className="text-base font-semibold leading-7 text-indigo-600">Progress</p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">1% Better</h1>
            <p className="mt-6 text-xl leading-8 text-gray-700">
              Before we start with the big idea, I want you to read through an extract from the book "Atomic Habits". It will serve as the groundwork for the idea that follows.
            </p>
            <div className="mt-10 max-w-xl text-base leading-7 text-gray-700 lg:max-w-none">
              <p>
              It is so easy to overestimate the importance of one defining moment and underestimate the value of making small improvements on a daily basis. Too often, we convince ourselves that massive success requires massive action. Whether it is losing weight, building a business, writing a book, winning a championship, or achieving any other goal, we put pressure on ourselves to make some earth-shattering improvement that everyone will talk about. Meanwhile, improving by 1 percent isn’t particularly notable—sometimes it isn’t even noticeable—but it can be far more meaningful, especially in the long run. The difference a tiny improvement can make over time is astounding. Here’s how the math works out: if you can get 1 percent better each day for one year, you’ll end up thirty-seven times better by the time you’re done. Conversely, if you get 1 percent worse each day for one year, you’ll decline nearly down to zero. What starts as a small win or a minor setback accumulates into something much more.
              </p>
              <blockquote className="mt-4 border-l-4 border-gray-200 pl-4 text-lg text-gray-600">
              <p>1% BETTER EVERY DAY</p>
              <p>1% worse every day for one year. 0.99365 = 00.03</p>
              <p>1% better every day for one year. 1.01365 = 37.78</p>
              </blockquote>
              <p className="mt-8">Since now we know the importance of getting better every day, Let's dive into the</p>
              <h2 className="mt-8 text-2xl font-bold text-gray-900">Big Idea</h2>
              <p className="mt-6">Let me just explain it to you with an example. Lets us say that you studied(or worked towards your goal) for 4 hours on Monday and then 4.5 hours on Tuesday and so on.... just like any other 'average' week. All this doesn't make much sense and you will feel like you are doing a great job on working towards your goal.</p>

              <p className="mt-6">Now, let us plot the number of hours studied VS weekdays in a graph and look at it.</p>

              <p className="mt-6 w-56">
                  <img src="https://lh3.googleusercontent.com/-3GMR66rIY6M/YFouVjz0wzI/AAAAAAAAAAs/52eBYwbfe-gcZFaC3jUdLxbYvQSMqTpDwCLcBGAsYHQ/w400-h286/image.png" alt="Study hours graph"/>
              </p>

              <p className="mt-6">Shocked right! You start noticing that your number of study hours remained the same, if not decreased every alternate day.</p>

              <p className="mt-6"><strong>Realization</strong>: Now you have realized that you can do a lot better than your present self.</p>

              <p className="mt-6">Now, here comes the idea mentioned earlier in the blog: "<strong>getting 1% better every day</strong>"</p>

              <p className="mt-6">Let us say that you push yourself throughout the week and do better than what you did the day before, be it just 15 minutes more than the previous day, then the graph looks something like this.</p>

              <p className="mt-6 w-56">
                  <img src="https://lh3.googleusercontent.com/-d5EwWg8Wb2E/YForhnYxVBI/AAAAAAAAAAc/GbgbbN7-cl8-vU6Es-_bBAQOI_ifBgC9gCLcBGAsYHQ/w400-h164/image.png" alt="Increasing study hours graph"/>
              </p>

              <p className="mt-6">Satisfying right, and trust me, when you literally put in hours behind it to get that +ve slope, you automatically start finding it satisfying.</p>

              <p className="mt-6">Now, let's look at an example where you are motivated initially and decided that "this is it! I start working my a** off now!" but in reality, that motivation wears down eventually.</p>

              <p className="mt-6 w-56">
                  <img src="https://lh3.googleusercontent.com/-wAVWQuGAHdI/YFn2Tnzim8I/AAAAAAAAAAU/Ac8pRx7OAIY_cpoW75lQypSGS3h5Z8gPQCLcBGAsYHQ/w400-h191/image.png" alt="Decreasing motivation graph"/>
              </p>

              <p className="mt-6">You start feeling guilty right because our human brain does not like to see negative slopes. </p>

              <p className="mt-6">The following week, your brain makes sure that you don't experience those emotions again, and as a result, you start working even harder than you previously used to.</p>

              <p className="mt-6">When I personally started using this idea, I couldn't get that "inner peace" if I didn't study longer than I did the previous day because I knew that at that end of the week, just 1 bad day would ruin the satisfaction I worked for the rest of the week.</p>

              <p className="mt-6">Here is an example of how just 1 bad day affects your graph, so the next time you don't feel like studying, remember, one bad day, and your whole week's work goes in vain (well not exactly, but you miss out on the 'feeling' that you were working for the whole week)</p>

              <p className="mt-6 w-56">
                  <img src="https://lh3.googleusercontent.com/-2up6HiGrPSM/YFotvzLmk8I/AAAAAAAAAAk/Kjpo6jnTYrQwy1i5xWYtbHs_Lgi0OKlXwCLcBGAsYHQ/w400-h247/image.png" alt="Bad day effect graph"/>
              </p>

              <p className="mt-6">In this graph, you could see that one bad day, and it seems to take down the whole graph with it.  This method helps you make sure that you maintain consistency while working towards your goals.</p>

              <p className="mt-6">This idea is not only applicable to the number of hours you worked or studied throughout the week. It can also be used for</p>

              <ul className="mt-6">
                  <li>plotting the weights you lift or the number of reps you do in the gym</li>
                  <li>Mock test you take for the preparation of any competitive exams</li>
              </ul>

              <p className="mt-6">It is important to note that the scale may vary for each and every situation.</p>

              <p className="mt-6">I feel that the best part about this plotting idea is that it lets us see the big picture and our progress through a period of time because sometimes its easy to fall into the trap of thinking that 'you are not working hard enough', but this method lets you see how much better you have become through the course of a week or a couple of months or even a year.</p>

              <p className="mt-6">This method indirectly forces you to push your limits and work harder than yesterday and at the same time, it lets you see the big picture so that you can take a minute and pat yourself on the back for the progress that you have made.</p>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

