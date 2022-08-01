<?xml version="1.0"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
        <html>
            <link rel="stylesheet" href="styles/cleaning.css"></link>
	 <link rel="stylesheet" href="styles/Table.css"></link>
	 <link rel="stylesheet" href="styles/Text.css"></link>
	 <link rel="stylesheet" href="styles/heading.css"></link>
	 <link rel="stylesheet" href="styles/Images.css"></link>
	 <link rel="stylesheet" href="styles/Menu.css"></link>
	 <link rel="stylesheet" href="styles/List.css"></link>
	 <link rel="stylesheet" href="styles/Links.css"></link>
	 <link rel="stylesheet" href="styles/other.css"></link>
	 <link rel="stylesheet" href="styles/Sundry.css"></link>
     <link rel="stylesheet" href="styles/Canvas.css"></link>
     <link rel="stylesheet" href="styles/Forum.css"></link>
            <body class="bhide">
                <noscript><p>У Вас выключен JavaScript</p>
                    <style>
                        .bhide{
                        opacity: 1 !important;
                        }
                    </style>
                </noscript>
                 <header>
                 <hr></hr>
                    <div class="menu">
                    <table class ="tablmenu">
                            <tr>
                            <td><a href="index.html"><img src="images/Home.png"></img></a></td>
                            <td><a href="blog.xml">ФОРУМ</a></td>
                            <td><a href="index1.html"><blockquote>Любимые «школьные» предметы</blockquote></a></td>
                            <td><a href="index2.html"><blockquote>Знаю языки программирования, степень владения</blockquote></a></td>
                            <td><a href="index3.html"><blockquote>Имею выход к компьютеру, сколько часов в неделю</blockquote></a></td>
                            <td><a href="index4.html"><blockquote>Хобби, спортивные увлечения, таланты</blockquote></a></td>
                            <td><a href="index5.html"><blockquote>Личный блог</blockquote></a></td>
                            <td><a href="index6.html"><blockquote>О ИИ</blockquote></a></td>
                            <td><div class="dopmenu"><a href="index7.html"><blockquote>Планы на будущее</blockquote></a>
                            <div class="dopmenu-content">
                                <a href="index8.html"><blockquote>Профессиональные</blockquote></a>
                                <a href="index9.html"><blockquote>Образовательные</blockquote></a>
                                <a href="index10.html"><blockquote>Житейские</blockquote></a>
                            </div>
                            </div>
                            </td>
                            <td><a href="index11.html"><blockquote>Галерея</blockquote></a></td>
                            </tr> 
                    </table>
                    </div>
                    </header>
                <div class="blog">
                    <xsl:for-each select="blog/post">
                        <div class="post">
                            <div class="title"><h1><xsl:value-of select="title"/></h1></div>
                            <h2 class="theme"><xsl:value-of select="theme"/></h2>
                            <div class="post_text"><p><xsl:value-of select="text"/></p></div>
                            <p class="date"><xsl:value-of select="date"/></p>
                            <div class="record">
                                <xsl:for-each select="records/comment">
                                    <span class="author"><xsl:value-of select="author"/></span>
                                    <div class="comment_text"><p><xsl:value-of select="text"/></p></div>
                                    <div class="response">
                                        <xsl:for-each select="responses/response">
                                            <span class="author"><xsl:value-of select="author"/></span>
                                            <p><xsl:value-of select="text"/></p>
                                        </xsl:for-each>
                                    </div>
                                </xsl:for-each>
                            </div>
                        </div>
                    </xsl:for-each>
                </div>
                <script src="scripts/timer.js"></script>
                <script src="scripts/sticky_menu.js"></script>
                <script src="scripts/movement.js"></script>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>