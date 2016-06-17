/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        it('Have URL Defined & not Empty', function(){
            for(i = 0; i < allFeeds.length; i++){
                expect(allFeeds[i].url).toBeDefined(); //Checks if the URL's Exist in the Array
                expect(allFeeds[i].url).not.toBe(''); //Checks Weather the Existing URL's are not Empty
            }
        });

        it('Have Name Defined & not Empty', function(){
            for(i = 0; i < allFeeds.length; i++){
                expect(allFeeds[i].name).toBeDefined();
                expect(allFeeds[i].name).not.toBe('');
            }
        });

    });

    describe('The Menu', function(){

        it('Hidden Menu as Default', function(){
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });//Using jQuery we Traverse the DOM and find the Class Exists


        it('Menu Displays & Hides When Clicked', function(){

            $('.menu-icon-link').click(); //Simulates a Click on the Link/Button
            expect($('body').hasClass('menu-hidden')).toBe(false);


            $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });

    });

    describe('Initial Entries', function(){

        beforeEach(function(done){
            loadFeed(0, done);
        }); // Loads the Feed Before Testing the Spec

        it('Consists of Atleast One Entry When Loaded', function(done) {
            expect($('.feed .entry').length).toBeGreaterThan(0);
            done();
        });

    });

    describe('New Feed Selection', function(){

        var feed;
        var newfeed;

        beforeEach(function(done){
            loadFeed(0, function(){ //Loads Feed Before Testing the Spec
                $feed = $('.header-title').html();
            }); //Stores the Loaded HTML from header-title
            loadFeed(1, done);
        }); //Loads Feed Second Time(Reloads)

        it('Changes Feed Content When Reloaded', function(){
            $newFeed = $('.header-title').html();
            //Saves the Newer Loaded Feed
            expect($feed).not.toEqual($newFeed);
            //Checks if The Older and Newly Loaded are not Equal
        });

    });

}());
